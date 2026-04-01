import React from "react";
import { useState} from "react";

const App = () =>{
    const[lists,setlist]=useState([]);
    const[input,setInput] = useState("");

    function handelInput(){
        setlist([...lists,input]);
        setInput("");
    }

    function handeldel(index){
        const newList = lists.filter((list,i)=>i!==index)
        setlist(newList)
    }
    return(
        <>
        <div>

        <input type="text"
        onChange={(e)=>setInput(e.target.value)}
        value={input}
        placeholder="enter name" />

        <button onClick={handelInput}>Add</button>
        </div>

        <ul>
            {lists.map((list,index) => (
                <li key={index}>{list}
                <button onClick={()=>handeldel(index)}>delete</button></li>
            ))}
        </ul>
        </>
    )
}

export default App;