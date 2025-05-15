import React from 'react';

const TaskBox = ({ data }) => {
  return (
    <div className="flex justify-between items-center flex-wrap  mt-6 px-8">
     
      <div className="w-full sm:w-60 max-w-sm bg-cyan-500 text-white rounded-lg shadow-md p-4">
        <h2 className="text-left font-bold text-3xl">{data.taskStats.newTask}</h2>
        <h3 className="text-left font-semibold text-xl mt-2">New Task</h3>
      </div>

     
      <div className="w-full sm:w-60 max-w-sm bg-green-300 text-black rounded-lg shadow-md p-4">
        <h2 className="text-left font-bold text-3xl">{data.taskStats.completed}</h2>
        <h3 className="text-left font-semibold text-xl mt-2">Completed Task</h3>
      </div>

      <div className="w-full sm:w-60 max-w-sm bg-red-300 text-black rounded-lg shadow-md p-4">
        <h2 className="text-left font-bold text-3xl">{data.taskStats.failed}</h2>
        <h3 className="text-left font-semibold text-xl mt-2">Failed Task</h3>
      </div>

      <div className="w-full sm:w-60 max-w-sm bg-yellow-300 text-black rounded-lg shadow-md p-4">
        <h2 className="text-left font-bold text-3xl">{data.taskStats.accepted}</h2>
        <h3 className="text-left font-semibold text-xl mt-2">Accepted Task</h3>
      </div>
    </div>
  );
};

export default TaskBox;
