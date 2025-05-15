import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({data}) => {
  return (
    <div className="flex screen flex-col overflow-auto justify-center items-center flex-wrap gap-5  w-full h-90 ">
     
  {data.tasks.map((elem, index) => (
  <React.Fragment key={index}>
    {elem.active && <AcceptTask task={elem} val = {data}/>}
    {elem.newTask && <NewTask task={elem} val={data} />}
    {elem.failed && <FailedTask task={elem} val={data} />}
    {elem.completed && <CompleteTask task={elem} val={data} />}
  </React.Fragment>
))}

   
     

    </div>
  );
};

export default TaskList;





