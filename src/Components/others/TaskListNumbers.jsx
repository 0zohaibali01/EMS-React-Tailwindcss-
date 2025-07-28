import React from 'react'

function TaskListNumbers() {
  return (
    <div className='flex justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] p-10 bg-red-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers