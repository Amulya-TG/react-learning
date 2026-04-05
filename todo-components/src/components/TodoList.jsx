function TodoList({tasks,handelDel}){
    return(
        <ul>
        {tasks.map((task,index)=>(
            <li key={index}>{task}
            <button onClick={()=>handelDel(index)}>Delete</button>
            </li>
        ))}
        </ul>
    )
}

export default TodoList;