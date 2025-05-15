import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const ALLTask = () => {
  const authData = useContext(AuthContext)

  return (
    <div className="w-full overflow-y-auto h-90">
     
      <div className="text-white text-lg font-bold flex bg-gray-800 py-3 px-6 rounded mb-2">
        <div className="w-1/5">Employee Name</div>
        <div className="w-1/5">New Task</div>
        <div className="w-1/5">Accepted Task</div>
        <div className="w-1/5">Failed Task</div>
        <div className="w-1/5">Completed Task</div>
      </div>


      {authData.employees.map((emp, idx) => (
        <div
          key={idx}
          className="text-white font-medium text-lg  flex bg-cyan-700 py-3 px-6 rounded mb-1 hover:bg-cyan-600 transition-colors"
        >
        {emp.tasks.map((task,idx)=>{})}
          <div className="w-1/5">{emp.name}</div>
          <div className="w-1/5">{emp.taskStats.newTask}</div>
          <div className="w-1/5">{emp.taskStats.accepted}</div>
          <div className="w-1/5">{emp.taskStats.failed}</div>
          <div className="w-1/5">{emp.taskStats.completed}</div>
        </div>

      ))}


     


      
    </div>
  )
}

export default ALLTask
