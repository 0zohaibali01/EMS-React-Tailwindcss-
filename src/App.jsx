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
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        if (['admin', 'employee'].includes(userData.role)) {
          setUser({ role: userData.role });
          setloggedInUserData(userData.data);
        } else {
          localStorage.removeItem('loggedInUser');
        }
      } catch {
        localStorage.removeItem('loggedInUser');
      }
    }
  }, []);



  const handleLogin = (email, password) => {
    setLoading(true);
    setLoginError('');

    setTimeout(() => {
      setLoading(false);

      const admin = authData?.admin.find(
        (e) => email === e.email && password === e.password
      );

      if (admin) {
        setUser({ role: 'admin' });
        setloggedInUserData(admin);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'admin', data: admin })
        );
        return;
      }

      const employee = authData?.employees.find(
        (e) => email === e.email && password === e.password
      );

      if (employee) {
        setUser({ role: 'employee' });
        setloggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
        return;
      }

      setLoginError('Invalid email or password');
    }, 1000);
  };



  return (
    <>
      {user?.role === 'admin' ? (
        <AdminDashboard
          data={loggedInUserData}
          changeUser={setUser} />
      ) : user?.role === 'employee' ? (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
          setloggedInUserData={setloggedInUserData}
        />
      ) : (
        <Login handleLogin={handleLogin} loading={loading} error={loginError} />
      )}
    </>
  );
}

export default App;
