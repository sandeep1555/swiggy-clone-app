import { LOGO_URL } from "../Utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus"
import { useContext, useState } from "react";
import UserContext from "../Utils/userContext";
import {  useSelector } from "react-redux";
const Header=()=>
{
   const cart=useSelector((store)=>store.cart.items);
   console.log(cart);
    const {Username}=useContext(UserContext);
    const onlineStatus=useOnlineStatus();
    const [logStatus,setlogStatus]=useState("Login");
    const clicklog=()=>
    {
        logStatus==="Login"?setlogStatus("Welcome,"+Username):setlogStatus("Login");
    }
    return (
        <div className="flex justify-between shadow-md items-center">
    <div className="logo-container">
        <img  className="h-20 w-30" src={LOGO_URL}/>
    </div>

    <div className="">
        <ul className="flex flex-wrap ">
            <li className="px-5">OnlineStatus: {onlineStatus?"🟢":"🔴"}</li>
             <li className="px-5"><Link to="/">Home</Link></li>
             <li className="px-5"><Link  to="/about">About Us</Link></li>
             <li className="px-5"><Link  to="/contact">Contact us</Link></li>
             <li className="px-5"> <Link  to="/cart">Cart-({cart.length})</Link></li>
             <li className="px-5"><Link to="/instamart">Instamart</Link></li>
            
        </ul>
        </div>
        <div>
        <button  className="mx-8  px-5  border border-black" onClick={clicklog}>{logStatus}</button>
        </div>

    </div>
    )
}

export default Header