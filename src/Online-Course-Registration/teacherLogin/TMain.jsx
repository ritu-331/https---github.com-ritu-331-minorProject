import React from 'react'

export default function TMain() {
  return (
<>
<main className="h-[94vh]  b w-full  flex flex-col justify-center items-center">
     
      

        <div className=" h-[60vh] w-[80vw]  m-2 py-10 bg-gray-100    border-2 border-black b rounded">
          <header className="p-2  flex text-4xl items-center border-b-2 border-black">
           Menage Students
          </header>
          <table className="border-b-2 p-2 rounded w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Pin Code</th>
                
                <th>Registration Date</th>

                
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </main>
</>
  )
}
