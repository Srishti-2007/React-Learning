import { useState } from "react";
import './Counter.css'
const Counter = () =>{
    const[count,setcount]=useState(0);
return <div className="counter-container">
    <p id="para">You have clicked {count} Times</p>
    <button onClick={()=>{setcount(count+1)}}>Click me</button>
</div>
}
export default Counter;
