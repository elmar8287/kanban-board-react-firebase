import React, {useState} from 'react';

const AddTask = () => {
  const [input, setInput] = useState("")
  const inputHandle = (e) => {
    setInput(e.target.value)
  }
  return (
    <div>
      <form>
        <input type="text" value={input} onChange={inputHandle} />
        <button type="button">Create</button>
      </form>
    </div>
  );
};

export default AddTask;