const employees = [
    {
        id: 1,
        name: "Ali Khan",
        email: "employee1@example.com",
        password: "123",
        taskNumbers: {
            active: 0,
            newTask: 1,
            completed: 1,
            failed: 1,
        },
        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                title: "Design Homepage",
                description: "Create wireframe and mockup for the homepage",
                date: "2025-07-28",
                category: "UI",
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Fix Login Bug",
                description: "Resolve bug causing login failure",
                date: "2025-07-25",
                category: "Bugfix",
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Optimize Database",
                description: "Improve query performance on user table",
                date: "2025-07-20",
                category: "Backend",
            },
        ],
    },
    {
        id: 2,
        name: "Sara Ahmed",
        email: "employee2@example.com",
        password: "123",
        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1,
        },
        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                title: "Add Search Filter",
                description: "Implement filter in task dashboard",
                date: "2025-07-29",
                category: "Feature",
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Setup Firebase Auth",
                description: "Integrate Firebase for employee login",
                date: "2025-07-26",
                category: "Auth",
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Dark Mode Toggle",
                description: "Add dark/light theme switcher",
                date: "2025-07-21",
                category: "UI",
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Write Test Cases",
                description: "Add unit tests for API endpoints",
                date: "2025-07-28",
                category: "Testing",
            },
        ],
    },
    {
        id: 3,
        name: "Hamza Tariq",
        email: "employee3@example.com",
        password: "123",
        taskNumbers: {
            active: 0,
            newTask: 1,
            completed: 1,
            failed: 1,
        },
        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                title: "Create Contact Page",
                description: "Design and implement contact form",
                date: "2025-07-30",
                category: "Frontend",
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Deploy App",
                description: "Deploy latest version to Netlify",
                date: "2025-07-25",
                category: "Deployment",
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Fix CSS Grid",
                description: "Resolve layout shift in mobile view",
                date: "2025-07-24",
                category: "UI",
            },
        ],
    },
    {
        id: 4,
        name: "Zara Iqbal",
        email: "employee4@example.com",
        password: "123",
        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1,
        },
        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                title: "Build Notifications",
                description: "Create alert system for task updates",
                date: "2025-07-28",
                category: "Feature",
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Update ReadMe",
                description: "Improve project documentation",
                date: "2025-07-23",
                category: "Documentation",
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Setup Linter",
                description: "Add ESLint and Prettier config",
                date: "2025-07-22",
                category: "Tooling",
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Create Admin Dashboard",
                description: "Basic layout and user table",
                date: "2025-07-28",
                category: "Admin",
            },
        ],
    },
    {
        id: 5,
        name: "Faizan Raza",
        email: "employee5@example.com",
        password: "123",
        taskNumbers: {
            active: 0,
            newTask: 1,
            completed: 1,
            failed: 1,
        },
        tasks: [
            {
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                title: "Create Calendar View",
                description: "Show tasks by due date",
                date: "2025-07-30",
                category: "UI",
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Fix Date Picker Bug",
                description: "Date icon not showing in dark mode",
                date: "2025-07-25",
                category: "Bugfix",
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Optimize CSS",
                description: "Remove unused Tailwind classes",
                date: "2025-07-24",
                category: "Frontend",
            },
        ],
    },
];

const admin = [
    {
        "id": 1,
        "name": "Admin User",
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}