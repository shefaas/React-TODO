import React from 'react';

export const Task = ({ tasks, setTasks, text, completed, id }) => {

    console.log({tasks});


    const handleCompletion = () => {
        console.log("ID: ", id);
        setTasks(
            tasks.map(
                (task) => {
                    if (task.id === id) {
                        return {
                            ...task, completed: true
                        }
                    }
                    return task;
                }
            )
        )
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
            <li className={`todo-item ${completed? "completed" : ""}`}>{text}</li>
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