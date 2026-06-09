import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
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
        <Outlet/>
    </div>
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children: [
  {
    path:"/",
    element: <Body/>,
  },
  {
    path: "/About",
    element: <About/>
  },{
    path:'/Contact',
    element: <Contact/>
  }
    ],
    errorElement: <Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);