const CompletedTodos = ({ todos, toggleTodo, handelDel }) => {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <>
      <ul>
        <h2>Completed Todos</h2>
        {completedTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <div className="todo-btn">
              <button onClick={() => handelDel(todo.id)}>Delete</button>
              <button onClick={() => toggleTodo(todo.id)}>Incomplete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CompletedTodos;
