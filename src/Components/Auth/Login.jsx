import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleLogin = (e) => {   
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", pass);

        setEmail('');
        setPass('');
    }
    return (
        <div className="login-container flex items-center justify-center h-screen w-screen">
            <div className="border-2 p-10  border-white-600 rounded-xl">
                <form
                onSubmit={(e)=>{
                    handleLogin(e)
                }} 
                className="flex flex-col items-center justify-center">
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required className='border-2 border-emerald-600-600 rounded-full py-2 px-3 text-xl outline-none bg-transparent' type="email" name="" id="" placeholder='Enter Your Email' />
                    <input 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required className='mt-4 border-2 border-emerald-600-600 rounded-full py-2 px-3 text-xl outline-none bg-transparent' type="password" placeholder='Enter Your Password' />
                    <button className='bg-blue-500 mt-8 text-white px-4 py-2 rounded-full text-lg'>Login</button>
                    <p className='mt-4'>Don't have an account? <a href="/register" className='text-blue-500'>Register</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login