const TodoList = ({tasks,handelDel}) => {
    return(
        <ul className="task-add">
        {tasks.map((task,index)=>(
            <li key={index}>{task} 
            <button type="submit" onClick={handelDel}>Delete</button></li>
        ))}
        </ul>
    )
}

export default TodoList;