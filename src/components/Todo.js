import React from "react";

const Todo = ({ todos, setTodos, text, todo }) => {
    const deleteTodo = () => {
        if (todo.completed === true) {
            setTodos(todos.filter((el) => el.id !== todo.id));
        }
        // console.log(todo);
    };

    const completeTodo = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className="todo">
            <li
                onClick={completeTodo}
                className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
                {text}
            </li>
            <div className="btn-filter">
                <button
                    onClick={completeTodo}
                    className={`complete-btn ${todo.completed ? "trash" : ""}`}
                >
                    <i className="fa-solid fa-check"></i>
                </button>
                <button
                    onClick={deleteTodo}
                    className={`delete-btn ${todo.completed ? "complete" : ""}`}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default Todo;
