import React from "react";

const NumberOfTodos = ({ filteredTodos }) => {
    return (
        <div className="numbers-items">
            <p>{filteredTodos.length} items left</p>
        </div>
    );
};

export default NumberOfTodos;
