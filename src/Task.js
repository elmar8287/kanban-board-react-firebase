import React, {useState} from 'react';
import "./App.css";

const Task = ({task, updateTask, modal, modalHandle}) => {
  const [selection, setSelection] = useState("")
  const handleSubmit = (e) => {
      updateTask(task.id, e);
  }

  const selectHandle = (e) => {
    setSelection(e.target.value)
  }

  return (
    <div className="task">
      <h3 onClick={e => modalHandle(task)}>{task.title}</h3>
      <img src={task.avatar} alt="avatar" />
      <select value={e => selectHandle(e)} onChange={e => {handleSubmit(e)}}>
        <option hidden>Update the status</option>
        <option>In process</option>
        <option>On review</option>
        <option>Done</option>
      </select>

    </div>
  );
};

export default Task;