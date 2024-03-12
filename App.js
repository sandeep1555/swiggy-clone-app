import React from "react";
import  ReactDOM  from "react-dom/client";

const Header=()=>
{
    return (
        <div className="Header">
    <div className="logo-container">
        <img  className="logo" src="https://logowik.com/content/uploads/images/free-food-delivery8485.logowik.com.webp"/>
    </div>

    <div className="nav-items">
        <ul>
             <li>Home</li>
             <li>About Us</li>
             <li>Contact us</li>
             <li>Cart</li>
        </ul>
    </div>
    </div>
    )
}

const RestaurantCard=({resName,cuisine,rating,deliverytime})=>
{
    return(
    <div className="res-card">
        <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ggbuknqzqc4qoqfnl2cr"/>
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating}</h4>
        <h4>{deliverytime}</h4>
    </div>)
}

const Body=()=>
{
    return(
        <div>
            <div className="search">Search
            </div>
            <div className="res-container">
            <RestaurantCard resName="MEghana foods" cuisine="biriyani,north indian,asian" rating="4.4" deliverytime="38 minutes" />
            <RestaurantCard resName="KFC" cuisine="burger,wings" rating="4.5" deliverytime="20minutes"/>
            <RestaurantCard/>
            <RestaurantCard/>

            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            
            </div>
        </div>
    )
}
  const App = () => {
    return (
        <div>
     <Header/>
     <Body/>
     </div>
    );
  };
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)