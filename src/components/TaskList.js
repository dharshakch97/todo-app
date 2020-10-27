import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const {tasks} = useContext(TaskListContext);
    console.log(tasks);
    return (
        <div>
            { tasks.length ? (
                <ul className="list">
                {tasks.map((task) => {
                    return <Task task={task} key={task.id} />
                })}
            </ul>
            ) : (
                <div className="no-tasks">No tasks</div>
            )}            
        </div>
    );
};

export default TaskList;