import React from 'react';
import { create } from "zustand";

const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (text) =>
        set((state) => ({
            todos: [
                ...state.todos,
                { id: Date.now(), text, completed: false },
            ],
        })),
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            ),
        })),
    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}));

export default function TodoApp() {
    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);

    const [text, setText] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
            <h2>📝 Zustand Todo App</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter todo"
                    style={{ padding: "0.5rem", width: "100%" }}
                />
            </form>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                            margin: "0.5rem 0",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span onClick={() => toggleTodo(todo.id)}>
                          {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
