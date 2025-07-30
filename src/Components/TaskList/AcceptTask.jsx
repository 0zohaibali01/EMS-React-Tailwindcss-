import React from 'react'

const AcceptTask = ({ e, data, updateUserData }) => {

    const markAsComplete = () => {
        const updatedUser = { ...data };

        updatedUser.tasks = updatedUser.tasks.map(task => {
            if (task === e) {
                return {
                    ...task,
                    active: false,
                    completed: true
                }
            }
            return task;
        });

        if (updatedUser.taskNumbers) {
            updatedUser.taskNumbers.active = Math.max(0, updatedUser.taskNumbers.active - 1);
            updatedUser.taskNumbers.completed += 1;
        }

        updateLocalStorageAndState(updatedUser);
    }

    const markAsFailed = () => {
        const updatedUser = { ...data };

        updatedUser.tasks = updatedUser.tasks.map(task => {
            if (task === e) {
                return {
                    ...task,
                    active: false,
                    failed: true
                }
            }
            return task;
        });

        if (updatedUser.taskNumbers) {
            updatedUser.taskNumbers.active = Math.max(0, updatedUser.taskNumbers.active - 1);
            updatedUser.taskNumbers.failed += 1;
        }

        updateLocalStorageAndState(updatedUser);
    }

    const updateLocalStorageAndState = (updatedUser) => {
        const allEmployees = JSON.parse(localStorage.getItem("employees")) || [];
        const updatedEmployees = allEmployees.map(emp =>
            emp.email === updatedUser.email ? updatedUser : emp
        );

        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: updatedUser }));

        updateUserData(updatedUser);
    }

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-lg '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{e.category}</h3>
                <h4 className='text-sm'>{e.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{e.title}</h2>
            <p className='text-sm mt-2'>{e.description}</p>
            <div className='flex justify-between mt-5'>
                <button
                    onClick={markAsComplete}
                    className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all duration-200 px-4 py-1 text-sm rounded-full text-white shadow-md">
                    Mark as Completed
                </button>

                <button
                    onClick={markAsFailed}
                    className="bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-200 px-4 py-1 text-sm rounded-full text-white shadow-md ml-2">
                    Mark as Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask
