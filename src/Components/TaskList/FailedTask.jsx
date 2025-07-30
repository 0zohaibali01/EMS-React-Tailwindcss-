import React from 'react'

const FailedTask = ({e}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-lg '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{e.category}</h3>
                <h4 className='text-sm'>{e.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{e.title}</h2>
            <p className='text-sm mt-2'>{e.description}</p>
            <div className='mt-2'>
                <div className='bg-yellow-500 px-4 py-1 text-sm rounded-full w-1/4'>Failed</div>
            </div>
        </div>
    )
}

export default FailedTask