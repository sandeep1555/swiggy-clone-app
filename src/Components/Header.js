import { LOGO_URL } from "../Utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../Utils/useOnlineStatus"
const Header=()=>
{

    const onlineStatus=useOnlineStatus();
    return (
        <div className="Header">
    <div className="logo-container">
        <img  className="logo" src={LOGO_URL}/>
    </div>

    <div className="nav-items">
        <ul>
            <li>OnlineStatus: {onlineStatus?"🟢":"🔴"}</li>
             <li><Link to="/">Home</Link></li>
             <li><Link  to="/about">About Us</Link></li>
             <li><Link  to="/contact">Contact us</Link></li>
             <li><Link >Cart</Link></li>
             <li><Link to="/instamart">Instamart</Link></li>
        </ul>
    </div>
    </div>
    )
}

export default Header