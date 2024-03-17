import { LOGO_URL } from "../Utils/constants"
import { Link } from "react-router-dom"
const Header=()=>
{
    return (
        <div className="Header">
    <div className="logo-container">
        <img  className="logo" src={LOGO_URL}/>
    </div>

    <div className="nav-items">
        <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link  to="/about">About Us</Link></li>
             <li><Link  to="/contact">Contact us</Link></li>
             <li><Link >Cart</Link></li>
        </ul>
    </div>
    </div>
    )
}

export default Header