import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    const deletedTodo = () => {
        setTodos(todos.filter((todos) => !todos.completed));
    };
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        todos={todos}
                        setTodos={setTodos}
                        text={todo.text}
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </ul>
            <button className="delete-all" onClick={deletedTodo}>
                Delete all completed todo
            </button>
        </div>
    );
};

export default TodoList;
