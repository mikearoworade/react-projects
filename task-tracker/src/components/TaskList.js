import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleTask, deleteTask }) {
    if (tasks.length === 0) {
        return <p style={{ textAlign: 'center' }}>No tasks yet! 🎉</p>;
    }

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;
