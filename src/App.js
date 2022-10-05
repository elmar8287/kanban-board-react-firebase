import { useState } from 'react';
import './App.css';
import Task from './Task';
import Tasks from './Tasks';
import {data} from "./data";
import AddTask from './AddTask';

function App() {
  const [newData, setNewData] = useState(data)

  const updateTask = (id, e) => {
    setNewData(current =>
      current.map(obj => {
        if (obj.id === id) {
          return {...obj, status: e.target.value};
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
