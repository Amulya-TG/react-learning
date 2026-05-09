import React, { useEffect, useState } from "react";
import CompletedTodos from "./components/CompletedTodos";
import IncompletedTodos from "./components/IncompletedTodos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const[editId,setEditId]=useState(null)
  const[editText,setEditText]=useState("");

  const fetchApi = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data.slice(0, 10));
    } catch {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);

  function handelSubmit() {
    if (!input) return;
    const newTodo = {
      id: Date.now(),
      title: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function handelDel(id) {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  }

  function handelEdit(todo){
    setEditId(todo.id);
    setEditText(todo.title);
  }

  function handelUpdate(){
    setTodos(
      todos.map((todo)=>todo.id===editId
    ?{...todo,title:editText}:todo)
    )
  };

  return (
    <div className="container">
      <div className="todo-left">
        <div className="todo-list">
          <CompletedTodos
            todos={todos}
            toggleTodo={toggleTodo}
            handelDel={handelDel}
            handelEdit={handelEdit}
          />
        </div>
        <div className="todo-fun">
          <h2>Add New Todo</h2>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handelSubmit}>Add</button>

          {editId && (
        <div>
          <input type="text" 
          value={editText}
          onChange={(e)=>setEditText(e.target.value)}/>
          <button onClick={handelUpdate}>Update</button>
        </div>
      )}
        </div>
      </div>
      <div className="todo-list todo-right">
        <IncompletedTodos todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
};

export default App;
