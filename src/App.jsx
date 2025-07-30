import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./Components/DashBoard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./Context/AuthProvider";


function App() {
  // localStorage.clear()
  // setLocalStorage()

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser({ role: userData.role })
      setloggedInUserData(userData.data)
    }
  }, [])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser({ role: 'admin' })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser({ role: 'employee' })
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else {
      alert('invalid')
    }
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
          setloggedInUserData={setloggedInUserData}
        />

      )}
    </>
  );

}

export default App;
