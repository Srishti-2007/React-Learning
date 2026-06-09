import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    const [btn,setbtn]=useState("login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                {/* <img src={birdImg} alt="img" /> */}
                <ul>     
        <li><Link to="/">Home</Link></li>
  <li><Link to="/About">About Us</Link></li>
  <li><Link to="/Contact">Contact us</Link></li>
  <li>Cart</li>

                     <button className="loginbtn" 
                     onClick={()=>{
                     btn==="login" ?  setbtn("logout"): setbtn("login");
                       
                     }}
                     >{btn}</button>
                </ul>
               
            </div>
        </div>
    )
}
export default Header;