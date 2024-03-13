import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Utils/mockData";
import { useState } from "react";


const Body=()=>
{
    const [ListOfRestaurant,setListOfRestaurant]=useState(restaurantList)
    return(
        <div>
            <div className="search">
                <button className="toprate-btn" onClick={()=>
                {
                    console.log("bclicked");
                    const filterRes=ListOfRestaurant.filter((res)=>res.data.avgRating>4.2);
                    ListOfRestaurant!==filterRes ? setListOfRestaurant(filterRes):setListOfRestaurant(ListOfRestaurant)
                }}>Top Reated Restaurants</button>
            </div>
            <div className="res-container">
               
            {  ListOfRestaurant.map((restaurant)=>(
                <RestaurantCard resData={restaurant}  />


            ))
           
        }
            </div>
        </div>
    )

}

export default Body