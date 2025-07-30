import React from 'react'

const NewTask = (props) => {


    const accpetTask = () => {
        // Step 1: Deep copy the user object
        const updatedUser = { ...props.data };

        // Step 2: Update tasks array
        updatedUser.tasks = updatedUser.tasks.map((task) => {
            if (task === props.e) {
                return {
                    ...task,
                    newTask: false,
                    active: true,
                };
            }
            return task;
        });

        // Step 3: Update taskNumbers
        if (updatedUser.taskNumbers) {
            updatedUser.taskNumbers.newTask = Math.max(0, updatedUser.taskNumbers.newTask - 1);
            updatedUser.taskNumbers.active += 1;
        }

        // Step 4: Update in localStorage
        const allEmployees = JSON.parse(localStorage.getItem("employees")) || [];
        const updatedEmployees = allEmployees.map((emp) => {
            if (emp.email === updatedUser.email) {
                return updatedUser;
            }
            return emp;
        });

        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: updatedUser }));

        // Step 5: Update React state
        props.updateUserData(updatedUser);
    };



    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-lg '>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{props.e.category}</h3>
                <h4 className='text-sm'>{props.e.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{props.e.title}</h2>
            <p className='text-sm mt-2'>{props.e.description}</p>
            <div className='mt-4'>
                <button
                    onClick={accpetTask}
                    className="bg-blue-400 text-white px-3 py-1 rounded-full shadow-sm
                             hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300
                             active:shadow-inner transition-all duration-200"
                >
                    Accept Task
                </button>
            </div>
        </div>
    )
}

export default NewTask