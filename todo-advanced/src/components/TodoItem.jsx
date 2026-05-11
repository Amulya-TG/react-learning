import { useState } from "react";

const TodoItem = ({ todo, toggleTodo, handelDel, handelEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.title);
  function handelSave(){
    handelEdit(todo.id,newText);
    setIsEditing(false);
  }

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handelSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.title}</span>
          <div className="btns">
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={()=>setIsEditing(true)}>Edit</button>
            <button onClick={()=>handelDel(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
