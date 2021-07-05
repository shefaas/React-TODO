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
                                tasks={tasks}
                                setTasks={setTasks}
                                text={task.text}
                                complete={task.complete}
                                id={task.id} />
                        )}
                )}
            </ul>
        </div>
    );
}