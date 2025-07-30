import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setEmployees(employees);
    setAdmin(admin);
  }, []);

  return (
    <AuthContext.Provider value={{ employees, setEmployees, admin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;