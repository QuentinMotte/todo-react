import React from "react";
import uuid from "react-uuid";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextValue = (e) => {
        setInputText(e.target.value);
    };
    const submitTodo = (e) => {
        e.preventDefault();
        if (inputText === "") {
            alert("This can't be empty");
        } else {
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: uuid() },
            ]);
            setInputText("");
        }
    };

    return (
        <div>
            <form>
                <input
                    value={inputText}
                    onChange={inputTextValue}
                    type="text"
                    className="todo-input"
                    placeholder="...What you need to do ?"
                />
                <button
                    onClick={submitTodo}
                    type="submit"
                    className="submit-btn"
                >
                    submit
                </button>
            </form>
        </div>
    );
};

export default Form;
