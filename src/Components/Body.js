import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { restaurantList } from "../Utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/userContext";

const Body=()=>
{
const {Username}=useContext(UserContext);
    const RestaurantWithPromotedLabel= withPromotedLabel(RestaurantCard);
    const [ListOfRestaurant,setListOfRestaurant]=useState([])
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchText,setsearchText]=useState("");

    useEffect(()=>{fetchData()},[])

   const  fetchData= async()=>
    {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }


    const onlineStatus=useOnlineStatus();
    
    console.log(filteredRestaurant);
    console.log(ListOfRestaurant)
if(onlineStatus===false)  return <h1>please check your internet connection</h1>;


    if(ListOfRestaurant.length === 0)
    {
        return <Shimmer/>
    }
    return(
   
        <div>
            <div className="m-5 flex ">
            <div  className="">
                <input  className="p-2 outline-none border-gray-500 rounded-md border-2" type="text" value={searchText} placeholder={"search here "+Username} onChange={(e)=>
                {
                    setsearchText(e.target.value);
                    console.log(searchText)
                }} />


                <button className="mx-5 font-bold bg-red-500 p-2 rounded-md " onClick={()=>
                {
                   const filteredres= ListOfRestaurant.filter((res)=>
                   res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   setfilteredRestaurant(filteredres);
                }}>Search</button>
            </div>
        
            <div className="mx-5">
                <button className={`font-bold bg-gray-400 border p-2 rounded-md ${filteredRestaurant===ListOfRestaurant? "bg-gray-500":"bg-gray-800 text-white"} ` } onClick={()=>
                {
        
                    const filterRes=ListOfRestaurant.filter((res)=>res.info.avgRating>4.2);
                 
                  (filteredRestaurant===ListOfRestaurant) ? setfilteredRestaurant(filterRes):setfilteredRestaurant(ListOfRestaurant);
                  
                }}>Top Reated Restaurants</button>
     

            </div>
            </div>
            <div className="flex flex-wrap ">
               
            {  filteredRestaurant.map((restaurant)=>(
               <Link  key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                {restaurant.info.avgRating>4.3?<RestaurantWithPromotedLabel  resData={restaurant} />:
                <RestaurantCard resData={restaurant}   />}</Link> 


            ))
           
        }
            </div>
        </div>
    )

}

export default Body