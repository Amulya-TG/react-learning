const TodoInput =({input,setInput,handelAdd}) =>{
    return(
        <>
        <input type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Enter Name" />

        <button type="submit" onClick={handelAdd}>Submit</button>
        </>
    )
}

export default TodoInput;