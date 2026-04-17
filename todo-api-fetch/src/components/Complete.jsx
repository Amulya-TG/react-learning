function Complete({ todos }) {
  const completedTodos = todos.filter((todo) => todo.completed);
  const incompletedTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h2>Todos</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Completed</th>
            <th>Incomplete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul>
                {completedTodos.map((todo) => (
                  <li key={todo.id}>{todo.title}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {incompletedTodos.map((todo) => (
                  <li key={todo.id}>{todo.title}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Complete;