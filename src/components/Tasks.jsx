import React from 'react';
import Task from "./Task";
const Tasks = ({tasks, handleTaskClick, handleTaskRemove}) => {
    return (
        <>
            {/* sempre que fizer um loop com mais de um componente, tem que colocar key para renderizar tudo certinho */}
            {tasks.map((task) => (
            <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove}/>
            ))}
        </>
    )
}
export default Tasks;