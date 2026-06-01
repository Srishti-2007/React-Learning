import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import birdImg from 'url:./assets/img.png'

const resobj = {
  type: "restaurant",
  data: {
    id: "101",
    name: "Burger King",
    cuisines: ["Burgers", "Fast Food", "Beverages"],
    avgRating: "4.2",
    costForTwo: 35000,
    deliveryTime: 25,
  },
  subtype: "basic",
};



const AppLayout=()=>{
    return <div className="app">
        <Header></Header>
        <Body></Body>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);