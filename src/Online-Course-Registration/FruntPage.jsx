import React from 'react'
import { Link } from 'react-router-dom'

export default function FruntPage() {
  return (
   <>
     <div className='h-[100vh] bg-cyan-950  text-white w-full flex flex-col items-center justify-center'>
        <h1 id="h1" className='text-3xl'>ONLINE COURSE REGISTRATION</h1>
        <p className='m-2'>Free Course Registration System</p>
        <div id="main">
           
               <Link to='/studentLogin'> <button className='bg-white text-black p-2 rounded m-4'>LOGIN AS STUDENT</button> </Link>
                <Link to="/teacherLogin"><button  className='bg-white text-black p-2 rounded m-4'>LOGIN AS TEACHER</button> </Link>
        </div>
    </div>
   </>
  )
}

