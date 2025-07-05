import { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
          todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      throw new Error("Unknown action type: " + action.type);
  }
}

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
      <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
        <h2>📝 Todo App</h2>
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
          {state.map((todo) => (
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
            <span onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>
              {todo.text}
            </span>
                <button
                    onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
                >
                  ❌
                </button>
              </li>
          ))}
        </ul>
      </div>
  );
}
