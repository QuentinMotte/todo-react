import "./Index.scss";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import NumberOfTodos from "./components/NumberOfTodos";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const getLocalTodos = () => {
            if (localStorage.getItem("todos") === null) {
                localStorage.setItem("todos", JSON.stringify([]));
            } else {
                let todoLocal = JSON.parse(localStorage.getItem("todos"));
                setTodos(todoLocal);
            }
        };
        getLocalTodos();
    }, []);

    useEffect(() => {
        const filterTodo = () => {
            switch (status) {
                case "Completed":
                    setFilteredTodos(
                        todos.filter((todo) => todo.completed === true)
                    );
                    break;
                case "Uncompleted":
                    setFilteredTodos(
                        todos.filter((todo) => todo.completed === false)
                    );
                    break;
                default:
                    setFilteredTodos(todos);
                    break;
            }
        };
        const saveLocalTodos = () => {
            localStorage.setItem("todos", JSON.stringify(todos));
        };
        saveLocalTodos();
        filterTodo();
    }, [todos, status]);
    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <main>
                <Form
                    inputText={inputText}
                    setInputText={setInputText}
                    todos={todos}
                    setTodos={setTodos}
                    setStatus={setStatus}
                />

                <TodoList
                    setTodos={setTodos}
                    todos={todos}
                    filteredTodos={filteredTodos}
                />

                <Filter
                    setStatus={setStatus}
                    setTodos={setTodos}
                    filteredTodos={filteredTodos}
                    todos={todos}
                />

                <NumberOfTodos filteredTodos={filteredTodos} />
            </main>
        </div>
    );
}

export default App;
