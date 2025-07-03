import React from 'react';

function TaskItem({ task, toggleTask, deleteTask }) {
    return (
        <li
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
            }}
        >
      <span
          onClick={() => toggleTask(task.id)}
          style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
          }}
      >
        {task.text}
      </span>
            <button onClick={() => deleteTask(task.id)} style={{ color: 'red' }}>
                Delete
            </button>
        </li>
    );
}

export default TaskItem;
