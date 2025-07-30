import React, { createContext, use, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'


export const AuthContext = createContext()



function AuthProvider({ children }) {
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        const { employees, admin } = getLocalStorage()
        setUserData({ employees, admin })
        console.log(userData)
    },[])


    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
