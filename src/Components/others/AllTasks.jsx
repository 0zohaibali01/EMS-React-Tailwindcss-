import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

function AllTasks() {
    const authData = useContext(AuthContext)

    console.log()
    return (
        <div  className='bg-[#2a2a2a] rounded-lg p-5 mt-5'>
            <div className='bg-red-400 py-2 px-4 rounded flex justify-between mb-4'>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active Task</h5>
                <h5 className='w-1/5'>Completed</h5>
                <h5 className='w-1/5'>Failed</h5>
            </div>

            <div id='alltasks' className=''>
            {authData.employees.map((elem,idx) => {
                return <div key={idx} className=' border-2 border-emerald-500 py-2 px-4 rounded flex justify-between mb-4'>
                    <h2 className='text-lg font-medium w-1/5 '>{elem.name}</h2>
                    <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h3>
                    <h5 className='text-lg font-medium w-1/5 text-yellow-300'>{elem.taskNumbers.active}</h5>
                    <h5 className='text-lg font-medium w-1/5 '>{elem.taskNumbers.completed}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-red-400'>{elem.taskNumbers.failed}</h5>
                </div>
            })}
            </div>
        </div>
    )
}

export default AllTasks