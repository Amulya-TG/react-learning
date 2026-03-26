import React from "react";
import { useState } from "react";

const CounterApp = () =>{
  const[count,setCount] = useState(0);

    function increase(){
      setCount(count+1)
    }
    function decrease(){
      setCount(count+1)
    }
    function reset(){
      setCount(count+1)
    }
    return(
      <div className="container">
        <h2>Count : {count}</h2>
        <div className="btn">
        <button onClick={increase}>INC</button>
        <button onClick={decrease}>DEC</button>
        <button onClick={reset}>RESET</button>
        </div>
      </div>
    )
}

export default CounterApp;