import React, { useState, useEffect } from "react";

const TodoFetch = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodo = async () => {
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setTodos(data.slice(0, 10));
    }catch(error){
      console.log(error);
      
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchTodo();
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <p>loading....</p>
      ) : (
        <div>
          {todos.map((todo, index) => (
            <h3 key={index}>{todo.title}</h3>
          ))}
        </div>
      )}
    </>
  );
};

export default TodoFetch;
