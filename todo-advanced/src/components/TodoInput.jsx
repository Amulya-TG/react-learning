import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");
  function handelAdd() {
    if (!input) return;
    addTodo(input);
    setInput("");
  }
  return (
    <div className="input-box">
      <h2>Add Todo</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handelAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
