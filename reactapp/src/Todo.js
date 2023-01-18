import React from "react";
import Task from "./task";
import CreateTask from "./CreateTask";

export default function Todo() {
   
const [tasks, setTask] = React.useState(
    [{
        title: "It's run time",
        completed: true
    },
    {
        title: "Yoga,Meditation time",
        completed: true
    }
    ])
function addTask(task){
setTask(tasks => {
    return [
       ...tasks,
       task,
    ]
})
}

    function removeTask(index) {
        setTask(tasks => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            return newTasks;
        })
    }

    function updateTask(index) {
        setTask(tasks => {
            const newTasks = [...tasks];
            newTasks[index].completed = true;
            return newTasks;
        })
    }

return (
    <div className='todo-container'>
        <div className="pending-todo">
            <h2 style= {{color:"green" }}>Pending Todos</h2>
            {tasks.map((task, index) => <Task {...task} key={index} index={index} updateTask={updateTask} removeTask={removeTask}/>)}
        </div>
        <div className="create-todo">
            <CreateTask setTask={addTask}></CreateTask>
        </div>
    </div>
)
}






