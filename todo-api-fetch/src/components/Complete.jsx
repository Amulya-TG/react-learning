function Complete({ todos }) {
  const completedTodos = todos.filter((todo) => todo.completed);
  const incompletedTodos = todos.filter((todo) => !todo.completed);
  return (
    <div className="tbl">
      <table>
        <thead>
        <tr>
          <th>Completed todo</th>
          <th>InCompleted todo</th>
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
