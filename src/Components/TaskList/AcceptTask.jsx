import React from 'react'

const AcceptTask = ({e}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-lg '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{e.category}</h3>
                <h4 className='text-sm'>{e.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{e.title}</h2>
            <p className='text-sm mt-2'>{e.description}</p>
            <div className='flex justify-between mt-5'>
                <button className='bg-green-500 px-2 py-1 text-sm rounded-full'>
                    Mark as Completed
                </button>
                <button className='bg-red-500 px-4 py-1 text-sm rounded-full'>
                    Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask