import React, { useState } from "react";
import "./Count.css";
const Count = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter_container">
            <p id="para">You have clicked {count} times</p>
            <div className="counter-buttons">
                <button id="btn" onClick={() => setCount(count - 1)}>-</button>
                <button id="btn">{count}</button>
                <button id="btn" onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div>
                <button id="rbtn" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
};

export default Count;
