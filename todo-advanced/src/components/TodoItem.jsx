import { useState } from "react";

const TodoItem = ({ todo, toggleTodo, handelDel, handelEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.title);
  const [editPriority, setEditPriority] = useState("Medium");
  function handelSave() {
    handelEdit(todo.id, newText, editPriority);
    setIsEditing(false);
  }

  return (
    <div className="todo-item">
      {isEditing ? (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Todo</h2>
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <select
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button onClick={handelSave}>Save</button>
          </div>
        </div>
      ) : (
        <>
          <span>
            {todo.title} - {todo.priority}
          </span>
          <div className="btns">
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => handelDel(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
