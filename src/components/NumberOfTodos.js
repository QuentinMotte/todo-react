import React from "react";

const NumberOfTodos = ({ filteredTodos, todos }) => {
    return (
        <div className="numbers-items">
            <p>{filteredTodos.length} items left</p>

            <p>{todos.filter((todo) => !todo.completed).length} left todo</p>
        </div>
    );
};

export default NumberOfTodos;
