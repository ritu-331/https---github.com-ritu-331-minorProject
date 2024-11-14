import React, { useReducer, useRef, useState } from 'react'
import Button from '../components/Button'
import EnrollHistory from './EnrollHistory'

export default function RegistrationCourse() {

function regReducer(state,action){
  switch(action.type){
    case "add":
      return [...state,action.payload]
      case "delete":
        return state.filter((e)=>
        e.pinCode!=action.payload)
      default :return state
  }
}

var [history,setHistory]=useState("Before")

const [regData,dispatch]=useReducer(regReducer,[])
const [registration,setRegistration]=useState({
  stdname:"",
  regNo:"",
  pinCode:"",
  session:"",
  department:"",
  level:"",
  Semester:"",
  course:""
})


const handleChange=(e)=>{
  setRegistration({...registration,[e.target.name]:e.target.value})
  
}



const registrationRef=useRef()

const handleSubmit=(e)=>{
  e.preventDefault()
dispatch({type:"add",payload:registration})
setHistory("After")
  setRegistration({stdname:"",regNo:"",pinCode:"",session:"",department:"",level:"",Semester:"",course:""})
  registrationRef.current.focus()
}


  return (
  <>
  <div className='w-full  bg-gray-300 flex flex-row-reverse  items-center'><div  onClick={()=>setHistory("After")}><  Button btn="Registration History"/></div></div>
{history=="Before"&&   <main className="  b w-full  flex flex-col justify-center items-center">
        <div className="border-2 border-black m-4 p-4 w-[80vw]  rounded">
          <label className="text-sm mb-3 block">Student Name</label>
          <div className="relative flex items-center">
            <input
            value={registration.stdname}
            onChange={handleChange}
            ref={registrationRef}
              name="stdname"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Enter Student Name"
            />
          </div>
          

          <label className="text-sm mb-3 mt-2 block">Student Reg.No.</label>
          <div className="relative flex items-center">
            <input
            value={registration.regNo}
            onChange={handleChange}
              name="regNo"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Example:-000-000-000"
            />
          </div>

          
          <label className="text-sm mb-3 mt-2 block">Pin Code</label>
          <div className="relative flex items-center">
            <input
            value={registration.pinCode}
            onChange={handleChange}
              name="pinCode"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="450661"
            />
          </div>

          
          <label className="text-sm mb-3 mt-2 block">Session</label>
          <div className="relative flex items-center">
            <input
            value={registration.session}
            onChange={handleChange}
              name="session"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Select Session"
            />
          </div>

          
          <label className="text-sm mb-3 mt-2 block">Department</label>
          <div className="relative flex items-center">
            <input
            value={registration.department}
            onChange={handleChange}
              name="department"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Enter Department"
            />
          </div>

          
          <label className="text-sm mb-3 mt-2 block">Level</label>
          <div className="relative flex items-center">
            <input
            value={registration.level}
            onChange={handleChange}
              name="level"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Enter Level"
            />
          </div>

          
          <label className="text-sm mb-3 mt-2 block">Semester</label>
          <div className="relative flex items-center">
            <input
            value={registration.Semester}
            onChange={handleChange}
              name="semester"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Enter Semester"
            />
          </div>

          
          <label className="text-sm mb-3 mt-2 block">Course</label>
          <div className="relative flex items-center">
            <input
            value={registration.course}
            onChange={handleChange}
              name="course"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Enter Course"
            />
          </div>
          
         <Button handler={handleSubmit} btn="Submit"/>
        </div>
      

       
      </main>}
      {history=="After"&&<EnrollHistory regData={regData}/>}
  </>
  )
}
