import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './features/todos/todosSlice';
import { useState } from 'react';

export default function TodoApp() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
            <h2>📝 RTK Todo App</h2>
            <form onSubmit={handleSubmit}>
                <input style={{ padding: "0.5rem", width: "100%" }}
                       placeholder="Enter todo"
                       value={text} onChange={(e) => setText(e.target.value)} />
            </form>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map(todo => (
                    <li key={todo.id}
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                            margin: "0.5rem 0",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span onClick={() => dispatch(toggleTodo(todo.id))}>
                          {todo.completed ? <s>{todo.text}</s> : todo.text}
                        </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
