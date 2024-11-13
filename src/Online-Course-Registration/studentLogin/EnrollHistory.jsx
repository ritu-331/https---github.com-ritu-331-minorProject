import React from 'react'

export default function EnrollHistory() {
  return (
  <>
   <main className='h-[94vh]  b w-full  flex justify-center items-center'>

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
          </table>
    </div>
   </main>
  </>
  )
}
