import React, { useState, useEffect, use } from "react";
import { getLocalStorage } from "../../utils/localstorage";

const CreateTask = ({}) => {
  const [newTask, setnewTask] = useState({});
  const [TaskTitle, setTaskTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignto, setAssignto] = useState('');
  const [description, setDescription] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    alert('Task Created')
  
    const task = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: TaskTitle,
      taskDescription: description,
      taskDate: date,
      category: category
    };
  
    const { employees, admin } = getLocalStorage(); // ✅ correct destructure
  
    const updatedEmployees = employees.map((emp) => {
      if (emp.name === assignto) {
        console.log("✅ Found employee:", emp.name);
  
        // Safely handle tasks array if it doesn't exist
        const newTasks = Array.isArray(emp.tasks) ? emp.tasks : [];
  
        return {
          ...emp,
          tasks: [...newTasks, task],
          taskStats: {
            ...emp.taskStats,
            newTask: emp.taskStats?.newTask + 1 || 1
          }
        };
      }
      return emp;
    });
  
    // ✅ Now save the WHOLE updated employees array
    localStorage.setItem('Employees', JSON.stringify(updatedEmployees));
  
    console.log("✅ Saved employees to localStorage", updatedEmployees);
  
    // Reset all fields
    setCategory('');
    setDate('');
    setDescription('');
    setTaskTitle('');
    setAssignto('');
  };
  
  return (
    <div className="min-h-screen flex justify-center bg-black">
      <form onSubmit={submitHandler} className="w-full max-w-5xl bg-transparent border rounded-xl p-6 sm:p-8">
        <h2 className="text-2xl text-cyan-500 font-bold mb-6 text-center">
          Create New Task
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="text-white block mb-1">Task Title</label>
            <input
              required
              type="text"
              value={TaskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Make a UI Design..."
              className="w-full p-2 mb-4 bg-transparent text-white border border-cyan-400 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />

            <label className="text-white block mb-1">Date</label>
            <input
              required
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 mb-4 text-white border border-cyan-400 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:bg-cyan-900"
            />

            <label className="text-white block mb-1">Assign To</label>
            <input
              required
              type="text"
              value={assignto}
              onChange={(e) => setAssignto(e.target.value)}
              placeholder="Employee name"
              className="w-full p-2 mb-4 bg-transparent text-white border border-cyan-400 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />

            <label className="text-white block mb-1">Category</label>
            <input
              required
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Dev, Design..."
              className="w-full p-2 mb-4 bg-transparent text-white border border-cyan-400 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div className="flex flex-col h-full">
            <div>
              <label className="text-white block">Description</label>
              <textarea
                required
                rows="9"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add task details..."
                className="w-full p-2 mb-4 bg-transparent text-white border border-cyan-400 rounded mt-1 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 transition text-white py-2 rounded"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
