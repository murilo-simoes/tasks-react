import React from 'react';
import "./Task.css";
import {CgClose, CgInfo} from 'react-icons/cg'
import {useHistory} from 'react-router-dom'

const Task = ({task, handleTaskClick, handleTaskRemove}) => {
    
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return (
        <div className="task-container" style={task.completed ? { borderLeft: "6px solid chartreuse"} : {}}>
            <div className='task-title' onClick= {() => handleTaskClick(task.id)}>
            {task.title}
            </div>

            <div className="buttons-container">
                <button onClick={handleTaskDetailsClick} className="see-task-details-button"><CgInfo/></button>
                <button onClick={() => handleTaskRemove(task.id)} className="remove-task-button"><CgClose/></button>
            </div>
        </div>
    )
    // return ( <div className="task-container">{task.title}</div> );
}
 
export default Task;