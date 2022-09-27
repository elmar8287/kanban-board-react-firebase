import React from 'react';
import "./App.css";

const Task = ({data, id, task}) => {
  return (
    <div className="task">
      <h2>{task.title}</h2>
      <button>Edit</button>
    </div>
  );
};

export default Task;