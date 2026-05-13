import { useState } from "react";

const TodoInput = ({ addTodo,priority,setPriority}) => {
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
      <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handelAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
