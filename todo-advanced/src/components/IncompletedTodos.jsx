const IncompletedTodos =({todos,toggleTodo}) =>{
    const incompletedTodos = todos.filter((todo)=>!todo.completed);
    return(
        <>
            <h2>Incompleted Todos</h2>
            <ul>
                {incompletedTodos.map((todo)=>(
                <li key={todo.id}>{todo.title}
                <button onClick={()=>toggleTodo(todo.id)}>Complete</button></li>
                ))}
            </ul>
        </>
    )
}

export default IncompletedTodos;