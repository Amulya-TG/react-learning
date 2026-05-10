import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const[filter,setFilter] = useState("all")

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

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      title: text,
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

  function handelEdit(id, newText) {
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, title: editText } : todo,
      ),
    );
  }

  const filteredTodos = todos.filter((todo) => {
    const matcheSearch = todo.title.toLowerCase()
      .includes(search.toLowerCase());

    if(filter === "completed"){
      return matcheSearch && todo.completed
    };

    if(filter === "incomplete"){
      return matcheSearch && !todo.completed
    }
    return matcheSearch
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);
  const completeTodos = filteredTodos.filter((todo) => todo.completed);

  return (
    <div className="container">
      <TodoInput addTodo={addTodo} />
      <SearchBar search={search} setSearch={setSearch} />

      <h2>Incompleted Todos</h2>
      <TodoList
        todos={incompleteTodos}
        toggleTodo={toggleTodo}
        handelDel={handelDel}
        handelEdit={handelEdit}
      />

      <h2>Completed Todos</h2>
      <TodoList
        todos={completeTodos}
        toggleTodo={toggleTodo}
        handelDel={handelDel}
        handelEdit={handelEdit}
      />
    </div>
  );
};

export default App;
