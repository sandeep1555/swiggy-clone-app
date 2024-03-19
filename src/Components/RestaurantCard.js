
const RestaurantCard=(props)=>
{
    const {resData}=props;
    const {name, cuisines,deliveryTime,avgRating, 
        cloudinaryImageId }=resData.info;
    return(
        <div class=" w-[275px] bg-gray-300 m-5">
    <div class=" ">
        <img class="w-[250px] h-[175px] p-2" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
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