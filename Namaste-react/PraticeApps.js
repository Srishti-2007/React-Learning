import React from "react";
import ReactDOM from "react-dom/client";

// react.createelement => Object => HTMLElement(render)
// ctrate reactelement using react
const heading = React.createElement("h1",{id:"heading"},"namaste react")
// console.log(heading);

// JSX is different
// JS is different
// and also React is different
// *They all are not same*

// JSX is not HTML , it is a HTML like syntax

//js engien understand only=>ES6 (ECMAScrip)

// working : 
// JSX (transpiled before it reaches to js) - PARCEL - Babel
// JSX => React.createElement -> reactElemnt - JS object => HTMLElement(render)

// create reactelemnt using jsx
const jsxHeading = <h1>JSX namaste react</h1>
// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(heading);


// ***********************************************************************************
// react components
// ->class based components
// ->function based components : a function that return some piece of jsx or react element are called

const HeadingComponent=()=>{
    return ( <h1>this is function component</h1> );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);