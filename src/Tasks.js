import React from 'react';
import Task from './Task';

const Tasks = ({data}) => {
  const filterHandle = (filter) => {
    return data.filter(e => e.status === filter);
  };

  return (
    <div>
      <div className="main">
        <div className="boards">
          <div className="boards-title">
            <h2>Tasks</h2>
            <span>
              {filterHandle("").length}
            </span>
          </div>
          {
            filterHandle("")
              .map(task => (
              <Task task={task} />
            ))
          }
        </div>
        <div className="boards">
          <div className="boards-title">
            <h2>In process</h2>
            <span>
              {filterHandle("In process").length}
            </span>
          </div>
          {
            filterHandle("In process")
              .map(task => (
              <Task task={task} />
            ))
          }
        </div>
        <div className="boards">
          <div className="boards-title">
            <h2>Reviewing</h2>
              <span>
                {filterHandle("On review").length}
              </span>
          </div>
          {
            filterHandle("On review")
              .map(task => (
              <Task task={task} />
            ))
          }
        </div>
        <div className="boards">
          <div className="boards-title">
            <h2>Done</h2>
              <span>
                {filterHandle("Done").length}
              </span>
          </div>
          {
            filterHandle("Done")
            .map(task => (
              <Task task={task} />
            ))
          }
        </div>
      </div>


    </div>
  );
};

export default Tasks;