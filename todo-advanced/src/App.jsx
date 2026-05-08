import React, { useEffect, useState } from "react";
import CompletedTodos from "./components/CompletedTodos";

const App = () =>{
  const[todos,setTodos]=useState([]);
  const[loading,setLoading]=useState(true);
  const[input,setInput]=useState("")

  const fetchApi = async() =>{
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data.slice(0,10));
    }catch{
      console.error("Error:",err); 
    }finally{
      setLoading(false);
    }
  };
  useEffect(()=>{
    fetchApi();
  },[])
  
  function handelSubmit(){
    if (!input) return;
    const newTodo = {
      id : Date.now(),
      title : input,
      completed : false,
    }
    setTodos([...todos,newTodo])
  }

  function toggleTodo(id){
    setTodos(todos.map((todo)=>todo.id===id?{...todo,completed:!todo.completed}:todo));
  }

  function handelDel(id){
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  }

  return(
  <div className="container">
    <div className="todo-list">
      <CompletedTodos 
        todos={todos}
        toggleTodo={toggleTodo}/>
    </div>
    <h2>Add New Todo</h2>
    <div className="todo-fun">
      <input type="text" 
      value={input}
      onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={handelSubmit}>Add</button>
    </div>
  </div>
  )
}

export default App;