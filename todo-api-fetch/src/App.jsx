import { useState, useEffect } from "react";
import Complete from "./components/Complete";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodos(data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching todos", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const handleAdd = async () => {
    if (!input) return;
    const newTodo = {
      title: input,
      completed: false,
    };
    try {
      setAdding(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      const data = await res.json();
      setTodos((prev) => [data, ...prev]);
      setInput("");
    } catch (error) {
      console.error("Error adding todo", error);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App (API)</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd} disabled={adding}>
        {adding ? "Adding..." : "Add"}
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Complete todos={todos} />
      )}
    </div>
  );
}

export default App;