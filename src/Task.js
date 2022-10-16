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
    <div className="task" onClick={modalHandle}>
      <h2>{task.title}</h2>
      <img src={task.avatar} alt="avatar" />
      {/* <div onClick={e => {handleSubmit(e)}}>In process</div>
      <div onClick={e => {handleSubmit(e)}}>On review</div>
      <p onClick={e => {handleSubmit(e)}}>Done</p> */}
      <select value={e => selectHandle(e)} onChange={e => {handleSubmit(e)}}>
        <option></option>
        <option>In process</option>
        <option>On review</option>
        <option>Done</option>
      </select>

    </div>
  );
};

export default Task;