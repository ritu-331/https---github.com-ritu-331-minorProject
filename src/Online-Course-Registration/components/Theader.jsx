import React from 'react'
import { Link } from 'react-router-dom'

export default function Theader() {
  return (
  <>
    <nav className='h-[8vh] w-full bg-cyan-950 text-white flex justify-evenly items-center'>
      <div>  <h1 className='text-2xl'>Online-Course- Registration</h1></div>
      <div >  <ul className='flex'>
      <Link to="session" className={({isactive})=>isactive?"active":""}>  <li className='m-2'>Session</li></Link>
<Link to="semester" className={({isactive})=>isactive?"active":""}><li className='m-2'> Semester</li></Link>
       <Link to="department" className={({isactive})=>isactive?"active":""}> <li className='m-2'>Department</li></Link>
        <Link to="tCourses" className={({isactive})=>isactive?"active":""}><li className='m-2'> course</li></Link>

       
      {/*<Link to="action">  <li className='m-2'> Action</li></Link> */}
      
      </ul>
  
   
  
  </div>
    </nav>
  </>
  )
}
