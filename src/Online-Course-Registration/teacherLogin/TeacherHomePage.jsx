import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Theader from '../components/Theader'



export default function TeacherHomePage() {
  return (<>  
<Theader/>
<Outlet/>
  {/* <Link>Session</Link>
   <Link>Semester</Link>
   <Link>Department</Link>
   <Link>course</Link>
   <Link>Action</Link> */}
   </>

  )
}
