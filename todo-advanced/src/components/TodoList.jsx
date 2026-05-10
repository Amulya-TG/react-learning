import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, handelDel, handelEdit }) => {
  return (
    <>
      {todos.length === 0 ? (
        <p>No Todos</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            handelDel={handelDel}
            handelEdit={handelEdit}
          />
        ))
      )}
    </>
  );
};

export default TodoList;
