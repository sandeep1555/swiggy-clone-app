import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useState } from "react";
const RestaurantMenu=()=>
{
   const [showList,setshowList]=useState(null);
const {resId}=useParams();

const resInfo=useRestaurantMenu(resId);
console.log(resInfo);
if(resInfo===null) return <Shimmer />;

 const {  name,  cuisines,avgRating   } = resInfo?.cards[2]?.card?.card?.info ;

 const { itemCards }= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


const  category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


   return(
   <div className="text-center  flex flex-col items-center bg-gray-50 ">
      <div className=" flex flex-wrap m-2 justify-between items-center w-6/12  shadow-lg bg-white  rounded-lg ">
      <div className="">
    <h1 className="font-bold text-2xl mt-5 mx-10">{name}</h1>
    <p className="text-gray-500 mb-5">{cuisines.join(",")}</p>
    </div>
    <div className=" ">
    <h4 className="border bg-green-400 p-2 mx-10">{avgRating}</h4>
    </div>
    </div>
    <h1 className="text-3xl m-5 ">Menu</h1>
    <div className="bg-gray-300 w-6/12 rounded-lg">
  
   
   {category.map((categories,index) =>
   (<RestaurantCategory key={categories.card.card.title}  data={categories.card.card}
   Showitems={index===showList?true:false}
   setshowList={()=>setshowList(index)}/>))}

</div>
   </div>)
}

export default RestaurantMenu