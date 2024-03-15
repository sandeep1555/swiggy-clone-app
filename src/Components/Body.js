import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body=()=>
{
    const [ListOfRestaurant,setListOfRestaurant]=useState([])
    const [filteredRestaurant,setfilteredRestaurants]=useState([]);
    const [searchText,setsearchText]=useState("");

    useEffect(()=>{fetchData()},[])

   const  fetchData= async()=>
    {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(ListOfRestaurant.length === 0)
    {
        return <Shimmer/>
    }
    return(
        <div>
            <div className="filter">
            <div  className="search">
                <input type="text" value={searchText} onChange={(e)=>
                {
                    setsearchText(e.target.value);
                    console.log(searchText)
                }} />


                <button className="search-btn" onClick={()=>
                {
                   const filteredres= ListOfRestaurant.filter((res)=>
                   res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   setfilteredRestaurants(filteredres);
                }}>Search</button>
            </div>
        
            <div className="toprated">
                <button className="toprate-btn" onClick={()=>
                {
        
                    const filterRes=ListOfRestaurant.filter((res)=>res.info.avgRating>4.2);
           filteredRestaurant===filterRes?setfilteredRestaurants(ListOfRestaurant):   setfilteredRestaurants(filterRes);
                }}>Top Reated Restaurants</button>
            </div>
            </div>
            <div className="res-container">
               
            {  filteredRestaurant.map((restaurant)=>(
                <RestaurantCard resData={restaurant}  />


            ))
           
        }
            </div>
        </div>
    )

}

export default Body