import React, { useState } from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/ALLTask';

const AdminDash = (props) => {
  const [tasksUpdated, setTasksUpdated] = useState(false);

  // Called when a new task is created in CreateTask
  const handleTaskCreated = () => {
    setTasksUpdated(prev => !prev);
  };

  return (
    <div className="min-h-screen w-full bg-black">
      <Header changeUser={props.changeUser} data={props.value} />
      <CreateTask onTaskCreated={handleTaskCreated} />
      <AllTask key={tasksUpdated} />
    </div>
  );
};

export default AdminDash;
