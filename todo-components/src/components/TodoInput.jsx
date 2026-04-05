const TodoInput =({input,setinput,handelAdd}) =>{
    return(
        <>
        <input type="text"
        value={input}
        onChange={(e)=>setinput(e.target.value)}
        placeholder="Enter Name" />

        <button type="submit" onClick={handelAdd}>Submit</button>
        </>
    )
}

export default TodoInput;