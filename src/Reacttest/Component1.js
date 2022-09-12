import React, { useState } from 'react'
import './component.css'
function Component1() {
  const[count,setCount]=useState(0);
  const counter=()=>
  {
   setCount(count+1);
  }
  return (
    <div id="outer">
      <button onClick={counter}>number of counts :{count}</button>
    </div>
  )
}

export default Component1