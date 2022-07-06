import React from "react";

const Todo = ({ todos, setTodos, text, todo }) => {
    const [todoEditing, setTodoEditing] = React.useState(null);
    const [editingText, setEditingText] = React.useState("");
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

    const editTodo = (id) => {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id && editingText !== "") {
                todo.text = editingText;
            }
            return todo;
        });
        setTodos(updatedTodos);
        setTodoEditing(null);
        setEditingText("");
    };

    return (
        <div className="todo">
            {todoEditing === todo.id ? (
                <input
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                    value={editingText}
                    placeholder={text}
                />
            ) : (
                <li
                    onClick={completeTodo}
                    className={`todo-item ${todo.completed ? "completed" : ""}`}
                >
                    {text}
                </li>
            )}

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
                {todoEditing === todo.id ? (
                    <button
                        className="edit-todo"
                        onClick={() => editTodo(todo.id)}
                    >
                        update
                    </button>
                ) : (
                    <button
                        className="edit-todo"
                        onClick={() => setTodoEditing(todo.id)}
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default Todo;
