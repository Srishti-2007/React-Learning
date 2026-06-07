// import Buttonin from './components/Buttonin';
// import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // const[count,setcount]=useState(0);
  // function handleclick(){
  //   setcount(count+1);
  // }
  return (
    <div>
      {/* <Buttonin incfun={handleclick} text="Click me">
        <h1>{count}</h1>
      </Buttonin> */}
      <Card name="srishti" children="mai ik child hu" children="not me">
        {/* <h1>I starting work</h1>
        <p>I will definitely follow discipline</p> */}
      </Card>
    </div>
  )
}

export default App
