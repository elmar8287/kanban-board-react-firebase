import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is a Kanban board</h1>
      <div className="main">
        <div className="boards">
          <div className="boards-title">
            <h2>Todo</h2>
            <span>3</span>
          </div>
          <ul>
            <li>Budget pre</li>
            <li>Meet with marketing</li>
            <li>Lunch with PM</li>
          </ul>
        </div>
        <div className="boards">
          <div className="boards-title">
            <h2>In process</h2>
            <span>1</span>
          </div>
          <ul>
            <li>Mail to IT</li>
            <li>Software test</li>
          </ul>
        </div>
        <div className="boards">
          <div className="boards-title">
            <h2>Reviewing</h2>
            <span>0</span>
          </div>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className="boards">
          <div className="boards-title">
            <h2>Done</h2>
            <span>2</span>
          </div>
          <ul>
            <li>Project baseline</li>
            <li>PILs aproval</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
