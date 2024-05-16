import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="task-checkbox"
          />
          <span
            className={`task-text ${task.completed ? 'completed' : ''}`}
          >
            {task.text}
          </span>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="task-delete"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;