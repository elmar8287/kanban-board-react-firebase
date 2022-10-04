import React from 'react';
import "./App.css";

const Task = ({task, updateTask}) => {
  const handleSubmit = (e) => {
   
      e.preventDefault();
      updateTask(task.id, e);

  }

  return (
    <div className="task">
      <h2>{task.title}</h2>
      <h4>{task.id}</h4>
      {/* <button onClick={handleSubmit}>Done</button> */}
      <select defaultValue="" onChange={e => {handleSubmit(e)}}>
        <option></option>
        <option>In process</option>
        <option>On review</option>
        <option>Done</option>
      </select>
    </div>
  );
};

export default Task;