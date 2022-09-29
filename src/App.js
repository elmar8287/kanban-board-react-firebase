import { useState } from 'react';
import './App.css';
import Task from './Task';
import Tasks from './Tasks';
import {data} from "./data";
import AddTask from './AddTask';

function App() {
  const [status, setStatus] = useState("")
  const [newData, setNewData] = useState(data)
  const statusHandle = (e) => {
    setStatus(e.target.value)
  }

  const updateTask = () => {
    setNewData(current =>
      current.map(obj => {
        if (obj.id === 4) {
          return {...obj, status: 'Done'};
        }
        return obj;
      }),
    );
  };

  const addTask = (input) => {
    setNewData(current =>
      [...current,
        {
          id: newData.length + 1,
          title: input,
          status: ""}
      ]
    );
  };


  return (

    <div className="App">
      <h1>This is a Kanban board</h1>
      <AddTask  addTask={addTask} newData={newData} />
      <Tasks updateTask={updateTask} data={newData} />
    </div>
  );
}

export default App;
