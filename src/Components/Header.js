import { LOGO_URL } from "../Utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus"
const Header=()=>
{

    const onlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between shadow-md">
    <div className="logo-container">
        <img  className="h-20 w-30" src={LOGO_URL}/>
    </div>

    <div className="">
        <ul className="flex flex-wrap  ">
            <li className="p-5">OnlineStatus: {onlineStatus?"🟢":"🔴"}</li>
             <li className="p-5"><Link to="/">Home</Link></li>
             <li className="p-5"><Link  to="/about">About Us</Link></li>
             <li className="p-5"><Link  to="/contact">Contact us</Link></li>
             <li className="p-5"> <Link >Cart</Link></li>
             <li className="p-5"><Link to="/instamart">Instamart</Link></li>
        </ul>
    </div>
    </div>
    )
}

export default Header