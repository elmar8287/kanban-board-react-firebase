import React from 'react';
import "./App.css";

const Task = ({task, updateTask}) => {

  return (
    <div className="task">
      <h2>{task.title}</h2>
      <button onClick={updateTask} >Edit</button>
    </div>
  );
};

export default Task;