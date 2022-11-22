import React, {useState} from 'react';

const AddTask = ({addTask, newData}) => {
  const [input, setInput] = useState("")
  const inputHandle = (e) => {
    setInput(e.target.value)
  }

  
  const handleSubmit = (e) => {
    if(input !== "") {
      e.preventDefault();
      addTask(input);
      console.log(newData)
      setInput("");
    }
  }

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit} className="add-task-form">
        <input type="text" value={input} onChange={inputHandle} maxLength="14" placeholder="Insert the task title" />
        <button type={input!=="" ? "submit" : "button"}>Create</button>
      </form>
    </div>
  );
};

export default AddTask;