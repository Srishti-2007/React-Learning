import { LOGO_URL } from "../utils/contants";
const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                {/* <img src={birdImg} alt="img" /> */}
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
export default Header;