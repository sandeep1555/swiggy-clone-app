
import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
const RestaurantMenu=()=>
{
const {resId}=useParams();

const resInfo=useRestaurantMenu(resId);

if(resInfo===null) return <Shimmer />;

 const {  name,  cuisines   } = resInfo?.cards[0]?.card?.card?.info ;

 const { itemCards }= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.cards[2]?.card?.card;

console.log(itemCards);


   return(<div>
 <h1>{name}</h1>
    <h3>{cuisines.join(",")}</h3>
<h1>Menu</h1>
<ul>
    {itemCards.map((item)=>
    (
       <li key={item?.card?.info?.id}>{item?.card?.info?.name}-{"Rs."}{item.card?.info?.price/100 || item.card?.info?.defaultPrice/100}</li>
   ))}
</ul>

   </div>)
}

export default RestaurantMenu