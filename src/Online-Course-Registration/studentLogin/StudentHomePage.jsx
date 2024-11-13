import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Sheader from '../components/Sheader'


export default function StudentHomePage() {
  return (
    <>
<Sheader/>
<Outlet/>
  {/* <Link >Profile</Link>
   <Link>Course</Link>
   <Link>Change Password</Link>
   <Link>History</Link> */}
    </>
  )
}
