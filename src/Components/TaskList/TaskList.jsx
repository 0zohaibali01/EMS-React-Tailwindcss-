import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'


function TaskList({ data }) {
    return (
        <div id='tasklist' className=' h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap overflow-x-auto py-5 mt-10'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask e={elem} key={idx} />
                }
                if (elem.newTask) {
                    return <NewTask e={elem} key={idx} />
                }
                if (elem.completed) {
                    return <CompleteTask e={elem} key={idx} />
                }
                if (elem.failed) {
                    return <FailedTask e={elem} key={idx} />
                }

            })}
        </div>
    )
}

export default TaskList