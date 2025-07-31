import React,{useEffect, useState} from 'react'
import "./Counter.css"
const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 5) {
      alert("You reached 5 clicks");
    }
  }, [count]);
  return (
    <div className="counter_container">
        <p id="para">You have clicked {count} times</p>
         <button id="btn" onClick={()=>{setCount(count+1) }}>CLick me</button>
         
    </div>
  )
}
export default Counter;
