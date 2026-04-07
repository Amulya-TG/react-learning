import React, { useState, useEffect } from "react";
import Complete from "./components/Complete";

const TodoFetch = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodos(data.slice(0, 10));
        console.log(data.slice(0, 10));
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };
    setLoading(true);
    fetchTodo();
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <p>loading....</p>
      ) : (
        <div className="todo-list">
          <h1>Todos List</h1>
          <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.title}</li>
          ))}
          </ul>
          <Complete todos={todos} />
        </div>
      )}
    </>
  );
};

export default TodoFetch;
