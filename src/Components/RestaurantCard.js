import { CDN_URL } from "../Utils/constants";

const RestaurantCard=(props)=>
{
    const {resData}=props;
    const {name, cuisines,deliveryTime,avgRating, 
        cloudinaryImageId }=resData.info;
    return(
        <div className="m-5 w-[300px] flex flex-col items-center  bg-gray-300 p-5">
    
        <div className="">
        <img className="w-[200px] h-[150px] " src={ CDN_URL+
cloudinaryImageId}/>
</div>
<div className="text-center ">
        <h3>{name}</h3>
        <h4 className="max-w-[200px]">{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
        </div>
    </div>)
}
  


export const  withPromotedLabel=(RestaurantCard)=>
{
    return(props)=>
    {
        return (<div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
    
        </div>)
    }
}

export default RestaurantCard