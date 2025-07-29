import React, { useState } from 'react'

function Header(props) {
  // const [userName, setUserName] = useState(null)

  // if(!data){
  //   setUserName('Admin')
  // }
  // else{
  //   setUserName(data.name)
  // }

  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div className='flex justify-between items-end mb-10 '>
        <h1 className='text-2xl text-white'>
           <span className='font-medium'>Hello</span> <br />
            <span className='text-3xl font-semibold'>Zohiab 👋</span>
        </h1>
        <button onClick={logOutUser} className='bg-red-500 text-white px-4 py-2.5 rounded-lg text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header