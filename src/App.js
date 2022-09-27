import { useState } from 'react';
import './App.css';
import Task from './Task';
import Tasks from './Tasks';
import {data} from "./data";
import AddTask from './AddTask';

function App() {
  const [status, setStatus] = useState("")
  const statusHandle = (e) => {
    setStatus(e.target.value)
  }

  
  console.log(data[0].status)
  console.log(data[1].status)
  console.log(data[2].status)
  
  return (

    <div className="App">
      <h1>This is a Kanban board</h1>
      <AddTask />
      <Tasks data={data} />
    </div>
  );
}

export default App;
