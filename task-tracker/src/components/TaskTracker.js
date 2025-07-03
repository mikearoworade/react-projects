import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

function TaskTracker() {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
    );
}

export default TaskTracker;
