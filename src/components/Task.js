import React from 'react';

export const Task = ({ tasks, setTasks, text, complete, id }) => {
    const handleCompletion = (event) => {
        complete = true;
    }

    const handleDeletion = () => {
        setTasks(
            tasks.filter(
                (task) => task.id !== id
            )
        );
    }
    return (
        <div className="todo">
            <li key={id} className="todo-item">{text}</li>
            <button 
                onClick={handleCompletion}
                className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={handleDeletion} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}