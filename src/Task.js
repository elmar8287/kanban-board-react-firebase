import React from 'react';
import "./App.css";

const Task = ({task, updateTask}) => {
  const handleSubmit = (e) => {
      updateTask(task.id, e);
  }

  return (
    <div className="task">
      <h2>{task.title}</h2>
      <h4>{task.id}</h4>
      {/* <div onClick={e => {handleSubmit(e)}}>In process</div>
      <div onClick={e => {handleSubmit(e)}}>On review</div>
      <p onClick={e => {handleSubmit(e)}}>Done</p> */}
      <select defaultValue=" "  onChange={e => {handleSubmit(e)}}>
        <option></option>
        <option>In process</option>
        <option>On review</option>
        <option>Done</option>
      </select>
    </div>
  );
};

export default Task;