const CompletedTodos =({todos,toggleTodo}) =>{
    const completedTodos = todos.filter((todo)=>todo.completed);
    return(
        <>
        <h2>Completed Todos</h2>
        <ul>
            {completedTodos.map((todo)=>(
            <li key={todo.id}>{todo.title}
            <button onClick={()=>toggleTodo(todo.id)}>Incomplete</button></li>
            ))}
        </ul>
        </>
    )
}

export default CompletedTodos;