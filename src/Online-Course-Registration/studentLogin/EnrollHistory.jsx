import React from 'react'
import Button from '../components/Button'

export default function EnrollHistory({regData}) {
  return (
  <>
   <main className='  b w-full  flex justify-center items-center'>

    <div className=' h-[80vh] m-2 py-10 bg-gray-100    border-2 border-black b rounded'>
    <header className='p-2  flex text-4xl items-center border-b-2 border-black'>
        Registration History
           
          </header>
          <table className='border-2 border-black m-2 p-2 rounded w-[80vw]'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Department</th>
                    <th>Course Name</th>
                    <th>Course Code</th>
                    <th>Session</th>
                    <th>Semester</th>

                </tr>
                
            </thead>
            <tbody>
            {
              regData?.map((e,index)=>{
                return(
                  <tr>
                    <td>{index+1}</td>
                    <td>{e.stdname}</td>
                    <td>{e.regNo}</td>
                    <td>{e.pinCode}</td>
                    <td>{e.session}</td>
                    <td>{e.department}</td>
                    <td>{e.level}</td>
                    <td>{e.Semester}</td>
                    <td>{e.course}</td>
                    <td onClick={()=>dispatch({type:"delete",payload:e.pinCode})}><Button btn="Delete"/></td>
                  </tr>
                )
              })
            }
            </tbody>
           
          </table>
    </div>
   </main>
  </>
  )
}

