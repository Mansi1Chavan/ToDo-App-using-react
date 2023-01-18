
export default function Task(props) {
    function handleMarkCompleted() {
        props.updateTask(props.index);
    }

    function handleRemoveTask() {
        props.removeTask(props.index);
    }

    return (
        <div className="task" style={{background: 'lightGray', maxWidth: '450px', display: 'flex', justifyContent: 'space-between',alignItems: "center"}}>
            <div style={{height: '30px', fontSize: '20px'}}>{props.title} </div>
            <div style={{display: 'flex', justifyContent: 'end'}}>
                {props.completed && <button style={{border: 'transparent', background: 'black' , color: 'white' , fontSize: '20px'}}>Completed</button>}
                {!props.completed && <button onClick={handleMarkCompleted}>Mark Completed</button>}
                <button style={{background: 'red'}} onClick={handleRemoveTask}>Remove Task</button>
            </div>
            
        </div>
    )
}
