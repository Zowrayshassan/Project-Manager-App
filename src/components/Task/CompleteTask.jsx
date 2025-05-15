import React from 'react'

const CompleteTask = ({task}) => {
  return (
    
        <div className=" flex flex-row justify-between h-65 w-65 bg-transparent border border-green-500 rounded-lg ">
        <div className="">
          <div className=" flex flex-row justify-between ">
          <h3 className="text-white bg-gray-500 h-6 px-3 ml-2 mt-3 text-center text-sm hover:bg-transparent cursor-pointer inline-block rounded">
            {task.category}
        </h3>

            <h2 className="text-white mt-5 mr-3 text-sm font-mono">{task.taskDate}</h2>
          </div>
          <h3 className="text-white text-center font-bold mt-5">{task.taskTitle}</h3>
          <p className="text-white mt-2 ml-2 text-center">
            {task.taskDescription}
          </p>
          <div className="flex justify-center gap-6 mt-9">
  <button className="px-2 py-1 bg-green-500 text-white rounded-sm font-medium hover:bg-green-700 transition duration-200 shadow-md">
    Completed
  </button>
  
</div>
        </div>
      
      </div>
  
  )
}

export default CompleteTask
