import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider'; // adjust path if needed

function CreateTask() {
    const { employees, setEmployees } = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [category, setCategory] = useState('UI');
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const task = {
            active: false,
            newTask: true,
            completed: false,
            failed: false,
            title: taskTitle,
            description: description,
            date: taskDate,
            category: category,
        };

        const updatedEmployees = employees.map((employee) => {
            if (employee.name === assignedTo) {
                const updatedTasks = [...(employee.tasks || []), task];
                const taskNumbers = { ...employee.taskNumbers } || {
                    active: 0,
                    newTask: 0,
                    completed: 0,
                    failed: 0,
                };

                // Update task count
                if (task.active) taskNumbers.active += 1;
                if (task.newTask) taskNumbers.newTask += 1;
                if (task.completed) taskNumbers.completed += 1;
                if (task.failed) taskNumbers.failed += 1;

                return {
                    ...employee,
                    tasks: updatedTasks,
                    taskNumbers,
                };
            }
            return employee;
        });

        // Update context and localStorage
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        // Clear form
        setTaskTitle('');
        setDescription('');
        setAssignedTo('');
        setCategory('UI');
        setTaskDate('');
    };

    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className="max-w-full mx-auto p-6 shadow-lg rounded-xl bg-[#2a2a2a] text-white space-y-8">

                <h2 className="text-3xl font-bold text-center">Create New Task</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                    <div className="space-y-6">
                        {/* Task Title */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Task Title</label>
                            <input
                                value={taskTitle}
                                onChange={(e) => {
                                    setTaskTitle(e.target.value)
                                }}
                                type="text"
                                placeholder="Make a UI design"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-transparent"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => {
                                    setTaskDate(e.target.value)
                                }}
                                type="date"
                                className="w-full px-4 py-2 border rounded-lg bg-transparent text-white
              [&::-webkit-calendar-picker-indicator]:invert
              [&::-webkit-calendar-picker-indicator]:brightness-200
              [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                                style={{ colorScheme: 'dark' }}
                            />
                        </div>

                        {/* Assign To */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Assign To</label>
                            <input
                                value={assignedTo}
                                onChange={(e) => {
                                    setAssignedTo(e.target.value)
                                }}
                                type="text"
                                placeholder="Employee"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-transparent"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Category</label>
                            <select
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-transparent text-white"
                            >
                                <option className="bg-[#1c1c1c] text-white" value="UI">UI</option>
                                <option className="bg-[#1c1c1c] text-white" value="UX">UX</option>
                                <option className="bg-[#1c1c1c] text-white" value="Development">Development</option>
                                <option className="bg-[#1c1c1c] text-white" value="Testing">Testing</option>
                                <option className="bg-[#1c1c1c] text-white" value="Deployment">Deployment</option>
                            </select>
                        </div>
                    </div>

                    {/* Right Side: Description + Button */}
                    <div className="flex flex-col justify-between space-y-6">
                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                rows="10"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none bg-transparent"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <div className="text-left">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md
                                 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300
                                 transition-colors duration-200"
                            >
                                Create Task
                            </button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask