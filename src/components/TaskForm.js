import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
    const { addTask, clearList, editItem, editTask } =  useContext(TaskListContext);
    const [title, setTitle] = useState("");
    const handleChange = e => {
        setTitle(e.target.value);
        // console.log(title);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!editItem) {
            addTask(title);
            setTitle("");
        }
        else {
            editTask(title, editItem.id)
        }
    };

    useEffect(() => {
        if (editItem) {
            // console.log(editItem);
            setTitle(editItem.title)
        }
        else {
            setTitle("")
        }
    }, [editItem])
    return (
        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleChange} value={title} type="text" placeholder="Add Task..."
                required className="task-input" />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    { editItem ? 'Edit Task' : 'Add Task' }
                </button>
                <button onClick={() => clearList()} className="btn clear-btn">
                    Clear
                </button>
            </div>
        </form>
    );
};

export default TaskForm;