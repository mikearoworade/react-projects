import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
                style={{ width: '70%', padding: '8px' }}
            />
            <button type="submit" style={{ padding: '8px 12px', marginLeft: '8px' }}>
                Add
            </button>
        </form>
    );
}

export default AddTaskForm;
