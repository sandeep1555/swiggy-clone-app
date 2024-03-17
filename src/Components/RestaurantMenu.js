import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>
{
const [resInfo,setresInfo]=useState(null);

useEffect(()=>{fetchMenu()},[])

const fetchMenu= async()=>
{
   const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=24613&catalog_qa=undefined&submitAction=ENTER");

   const json=await data.json();
   console.log(json);

   setresInfo(json.data);
};
if(resInfo===null) return <Shimmer />;


 const {  name,  cuisines   } = resInfo?.cards[0]?.card?.card?.info ;

 const { itemsList }= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log(itemsList);


   return(<div>
 <h1>{name}</h1>
    <h3>{cuisines.join(",")}</h3>
<h1>Menu</h1>
<ul>
    {/* <li>{itemsList[0]?.info?.name}</li> */}
</ul>

   </div>)
}

export default RestaurantMenu