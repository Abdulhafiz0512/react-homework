import React, { useState } from 'react';
import './tasklist.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'To study React fundamentals', completed: false },
    { id: 2, text: 'To study React fundamentals', completed: false },
    { id: 3, text: 'To study React fundamentals', completed: false },
    { id: 4, text: 'To study React fundamentals', completed: false }
  ]);
  const [doneTasks, setDoneTasks] = useState([
    { id: 5, text: 'To study React fundamentals', completed: true }
  ]);

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    const completedTask = tasks.find(task => task.id === taskId);
    if (completedTask.completed) {
      setDoneTasks(doneTasks.filter(task => task.id !== taskId));
      setTasks(updatedTasks);
    } else {
      setTasks(updatedTasks);
      setDoneTasks([...doneTasks, { ...completedTask, completed: true }]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="task-list">
      <div className="task-input">
        <input type="text" placeholder="Add a new task" id="new-task-input" />
        <button onClick={() => {
          const input = document.getElementById('new-task-input');
          if (input.value.trim()) {
            addTask(input.value);
            input.value = '';
          }
        }}>+</button>
      </div>
      <div className="tasks">
        <h3>Tasks to do - {tasks.length}</h3>
        {tasks.map(task => (
          <div key={task.id} className="task">
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => toggleTaskCompletion(task.id)}>✔️</button>
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
          </div>
        ))}
      </div>
      <div className="done-tasks">
        <h3>Done - {doneTasks.length}</h3>
        {doneTasks.map(task => (
          <div key={task.id} className="task">
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
