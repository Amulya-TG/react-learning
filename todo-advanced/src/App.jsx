import React, { useEffect, useState } from "react";

const App = () =>{
  const[todos,setTodos]=useState([]);
  const[loading,setLoading]=useState(true);
  const[input,setInput]=useState("")

  const fetchApi = async() =>{
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      const data = await res.json();
      setTodos(data);
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
    const newTodo = {
      id : Date.now(),
      title : input,
      completed : false,
    }
    setTodos([...todos,newTodo])
  }

  return(
  <>
    <h1>Creating Advanced Todo</h1>
    <div>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
    <div>
      <h2>Add New Todo</h2>
      <input type="text" 
      value={input}
      onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={handelSubmit}>Add</button>
    </div>
  </>
  )
}

export default App;