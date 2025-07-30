import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

function AdminDashboard(props) {
    return (
        <div className="h-screen w-full p-10">
            <Header data={props.data} changeUser={props.changeUser} />
            <CreateTask />
            <AllTasks />
        </div>
    )
}

export default AdminDashboard
