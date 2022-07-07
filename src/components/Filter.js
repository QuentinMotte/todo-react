import React from "react";

const Filter = ({ setStatus, filteredTodos, setTodos, todos }) => {
    const filterStatus = (e) => {
        setStatus(e.target.textContent);
    };
    const deleteCompleteTodo = () => {
        filteredTodos.forEach((todo) => {
            if (todo.completed === true) {
                setTodos(todos.filter((el) => el.id !== todo.id));
            }
        });
    };
    return (
        <div className="filter-btn">
            <button onClick={filterStatus} className="all">
                All
            </button>
            <button onClick={filterStatus} className="completed">
                Completed
            </button>
            <button onClick={filterStatus} className="uncompleted">
                Uncompleted
            </button>
            <button className="delete-one-btn" onClick={deleteCompleteTodo}>
                Delete
            </button>
        </div>
    );
};

export default Filter;
