import React, { useState } from "react";

const TodoList = () =>{
  const[todo,setTodo]=useState("");
  const[tasks,setTask]=useState([])

    function handelClick(){
      setTask([...tasks,todo]);
      setTodo("")
    }

    function handelDel(index){
      console.log(index);
      
        const newTask = tasks.filter((task,i)=>i!==index)
        console.log(i);
        
        setTask(newTask)
    }
  return(
    <div>
      <div>
        <input type="text"
        onChange={(e)=>setTodo(e.target.value)}
        value={todo}
        placeholder="Enter task"/>
      <button type="submit" onClick={handelClick}>Add</button>
      </div>
      <div>
        {tasks.map((task,index)=>(
          <div key={index}>
            <h2>{task}</h2>
            <button onClick={()=>handelDel(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default TodoList;