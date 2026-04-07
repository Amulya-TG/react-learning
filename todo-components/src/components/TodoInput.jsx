const TodoInput =({input,setInput,handelAdd}) =>{
    return(
        <div className="in-add">
        <input type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Enter Name" />

        <button type="submit" onClick={handelAdd}>Submit</button>
        </div>
    )
}

export default TodoInput;