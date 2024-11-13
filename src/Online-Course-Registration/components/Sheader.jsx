import React from 'react'
import { Link } from 'react-router-dom'

export default function Sheader() {
  return (
    <>
    <nav className='h-[7vh] md:h-[6vh] w-full bg-cyan-950 text-white flex justify-evenly items-center'>
      <div>  <h1 className='text-2xl'>Online-Course- Registration</h1></div>
      <div >  <ul className='flex'>
       <Link to="profile"> <li className='m-2'>My Profile</li></Link>
      <Link to="registeredCourse"> <li className='m-2'> Registeration Course</li></Link>
     
       <Link to="enrollHistory"> <li className='m-2'> Enroll History</li></Link> 
       <Link to="password">  <li className='m-2'>Change Password</li></Link>
      {/* <Link to="logOut">  <li className='m-2'>Log Out</li></Link> */}
        
      
      </ul>
  
   
  
  </div>
    </nav>
    </>
  )
}
