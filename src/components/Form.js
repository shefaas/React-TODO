import React from 'react';

export const Form = ({ setInput, setTasks, input, tasks }) => {
    const handleTask = (event) => {
        // console.log(event);
        const text = event.target.value;
        setInput(text);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input !== "") {
            setTasks(
                (tasks) => {
                    return [...tasks, {text: input, completed: false, id: Date.now()}];
                }
            )
            setInput("");
        }
        // console.log(tasks);
    }

    return (
        <form>
            <input
                value={input}
                onChange={handleTask}
                type="text"
                className="todo-input" />
            <button
                onClick={handleSubmit}
                type="submit"
                className="todo-button" >
                    <i className="fas fa-plus-square" />
              </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all" >All</option>
                    <option value="completed" >Completed</option>
                    <option value="uncompleted" >Uncompleted</option>
                </select>
            </div>
        </form>
    );
}