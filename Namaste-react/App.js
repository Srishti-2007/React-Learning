import React from "react";
import ReactDOM from "react-dom/client";
// import birdImg from 'url:./assets/img.png'
const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All" />
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
const RestaurentCard=()=>{
    return (
        <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="rest-logo" src="https://static.vecteezy.com/system/resources/previews/067/391/747/non_2x/indian-style-spicy-biryani-served-on-a-restaurant-plate-free-photo.jpg"/>
            <h3>Meghana Foods</h3>
            <h4>Briyani, North indian,Asian</h4>
            <h4>4.4 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body=()=>{
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
                <RestaurentCard/>
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return <div className="app">
        <Header></Header>
        <Body></Body>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);