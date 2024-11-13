import React, { useReducer, useRef, useState } from 'react'
import Button from '../components/Button'

export default function Department() {

  function departmentReducer(state,action){
    switch(action.type){
      case "add":
        return[...state,action.payload]
        case "delete":
          return state.filter((e)=>e.department!=action.payload)
          default:
            return state
    }
  }

  const [departmentDeta,dispatch]=useReducer(departmentReducer,[])
const [department,setDepartment]=useState({
  department:"",
  section:""
})

const handleChange=(e)=>{
  setDepartment({...department,[e.target.name]:e.target.value})
}

const dapartmentref=useRef()

const handleSubmit=(e)=>{
  e.preventDefault();
dispatch({type:"add",payload:department})
setDepartment({department:"",section:""})
dapartmentref.current.focus()
}

  return (
   <>
       <main className="h-[94vh]  b w-full  flex flex-col justify-center items-center">
        <div className="border-2 border-black m-4 p-4 w-[80vw]  rounded">
          <label className="text-sm mb-3 block">Department Name</label>
          <div className="relative flex items-center">
            <input
            value={department.department}
            onChange={handleChange}
              name="department"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Example:-CS"
            />
          </div>
          

          <label className="text-sm mb-3 mt-2 block">Creation Date and Time</label>
          <div className="relative flex items-center">
            <input
            value={department.dataTime}
            onChange={handleChange}
              name="section"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder=""
            />
          </div>
          
         <Button handler={handleSubmit} btn="Submit"/>
        </div>
      

        <div className=" h-[60vh] w-[80vw]  m-2 py-10 bg-gray-100    border-2 border-black b rounded">
          <header className="p-2 bg-cyan-950 text-white flex text-4xl items-center border-b-2 border-black">
           Menage Department
          </header>
          <table className="border-b-2 p-2 rounded w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Department</th>
                <th>Section</th>
                

                
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
               departmentDeta.map((e,index)=>{
                return(
                  <tr>
                    <td>{index+1}</td>
                    <td>{e.department}</td>
                    <td>{e.dataTime}</td>
                    <td onClick={()=>dispatch({type:"delete",payload:e.department})}><Button btn="Delete"/></td>
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
