import React, { useState } from 'react'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList"

const App = () => {
  const[input,setInput] = useState("")
  const[tasks,setTasks] = useState([])
  function handelAdd(){
    setTasks([...tasks,input])
    setInput("")
  }

  function handelDel(index){
    const newTasks = tasks.filter((task,i)=>{i!==index}) 
    setTasks(newTasks);
  }

  return (
    <div className='container'>
      <TodoInput input={input}
      setInput={setInput}
      handelAdd={handelAdd}
      />

      <TodoList
      tasks={tasks}
      handelDel={handelDel}/>
    </div>
  )
}

export default App