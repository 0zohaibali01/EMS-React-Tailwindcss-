import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'


function EmployeeDashboard(props) {
    return (
        <div className=' '>
            <div className='p-8 h-screen w-screen'>
                <Header changeUser={props.changeUser} data={props.data}/>
                <TaskListNumbers data={props.data}/>
                <TaskList data={props.data}/>
            </div>
        </div>
    )
}

export default EmployeeDashboard