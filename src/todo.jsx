import React, { useState, useRef } from "react";
export default function InsaneTodo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { text: input, id: Date.now() }]);
            setInput("");
            inputRef.current?.focus();
        }
    };

    const toggleTodo = id =>
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));

    const deleteTodo = id =>
        setTodos(todos.filter(todo => todo.id !== id));

    return (
        <div style={{ maxWidth: 400, margin: "40px auto" }}>
            <h1>Simple To-Do List</h1>
            <div style={{ display: "flex", gap: 8 }}>
                <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add a task..."
                    onKeyDown={e => e.key === "Enter" && addTodo()}
                    style={{ flex: 1 }}
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul style={{ padding: 0, listStyle: "none" }}>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "8px 0",
                            textDecoration: todo.completed ? "line-through" : "none",
                            color: todo.completed ? "#888" : "#000"
                        }}
                    >
                        <span onClick={() => toggleTodo(todo.id)} style={{ cursor: "pointer" }}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)} style={{ color: "red" }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
