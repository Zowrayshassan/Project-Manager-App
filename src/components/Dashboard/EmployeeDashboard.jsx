import React from 'react'
import Header from '../other/Header'
import TaskBox from '../other/TaskBox'
import TaskList from '../Task/TaskList'

const EmployeeDash = (props) => {
  
  return (
    <div className = "bg-black">
      <div className="">
        <Header data = {props.value} changeUser={props.changeUser}/>
      </div>
      <div>
      <TaskBox data ={props.value} />
      </div>
      <div>
        <TaskList data = {props.value}></TaskList>
      </div>
      
      
    </div>
  );
  
}

export default EmployeeDash
