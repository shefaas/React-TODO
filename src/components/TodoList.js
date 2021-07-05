import React from 'react';

import { Task } from "./Task";

export const TodoList = ( { tasks, setTasks } ) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {tasks.map(
                    (task) => {
                        return (
                            <Task
                                key={task.id}
                                tasks={tasks}
                                setTasks={setTasks}
                                text={task.text}
                                completed={task.completed}
                                id={task.id} />
                        )}
                )}
            </ul>
        </div>
    );
}