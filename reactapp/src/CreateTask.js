import React from "react";

export default function CreateTask(props){

    const [value , setValue] = React.useState('')

    function handleSubmit(e){
        e.preventDefault();
        props.setTask( 
                {
                    title:value,
                    completed:false
                }
             )
        setValue('');
    
    }
    return (
        <form onSubmit = {handleSubmit}>
             <input className="input" type="text" value={value} placeholder="Add ToDo's Here" onChange={(e) => setValue(e.target.value) } style={{height: '20px'}}/>
             <button type="submit" style={{background: "blue" ,color: "white" , fontSize: '20px'}}>Submit</button>
        </form>
    )
}







