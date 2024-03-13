
const RestaurantCard=(props)=>
{
    const {resData}=props;
    const {name, cuisines,deliveryTime,avgRating, 
        cloudinaryImageId }=resData?.data;
    return(
    <div className="res-card">
        <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
    </div>)
}
  
export default RestaurantCard