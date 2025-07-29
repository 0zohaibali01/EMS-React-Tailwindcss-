import React from 'react'

function TaskListNumbers({data}) {
  return (
    <div className='flex justify-between gap-5 screen ' >
        <div className='rounded-xl w-[45%] py-6 px-10 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-10 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Tasks Tasks</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-10 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Tasks</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-10 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Tasks</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers