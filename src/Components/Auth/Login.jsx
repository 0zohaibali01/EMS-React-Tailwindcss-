import React, { useState } from 'react'

function Login({handleLogin}) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const submitHandler = (e) => {   
        e.preventDefault();
        handleLogin(email,pass)

        setEmail('');
        setPass('');
    }
    return (
        <div className="login-container flex items-center justify-center h-screen w-screen">
            <div className="border-2 p-10  border-white-600 rounded-xl">
                <form
                onSubmit={(e)=>{
                    submitHandler(e)
                }} 
                className="flex flex-col items-center justify-center">
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required className='border-2 rounded-full py-2 px-3 text-xl outline-none bg-transparent' type="email" name="" id="" placeholder='Enter Your Email' />
                    <input 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required className='mt-4 border-2 rounded-full py-2 px-3 text-xl outline-none bg-transparent' type="password" placeholder='Enter Your Password' />
                    <button className='bg-blue-500 mt-8 text-white text-xl px-16 py-2 rounded-full'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login