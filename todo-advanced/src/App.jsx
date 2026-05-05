import React, { useEffect, useState } from "react";

const App = () =>{
  const[todos,setTodos]=useState([]);
  const[loading,setLoading]=useState(true);
  const[input,setInput]=useState("")

  const fetchApi = async() =>{
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      const data = await res.json();
      console.log(data);
      
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

  return(
  <>
    <h1>Creating Advanced App</h1>
    <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  </>
  )
}

export default App;