import React, { useReducer, useRef, useState } from 'react'
import Button from '../components/Button'

export default function TCourses() {

function courseReducer(state,action){
  switch(action.type){
    case "add":
      return [...state,action.payload]
      case "delete":
        return state.filter((e)=>e.course!=action.payload)
  }
}

const [courseData,dispatch]=useReducer(courseReducer,[])

const [course,setCourse]=useState({
  code:"",
  name:"",
  section:"",
  seat:""
})

const handleChange=(e)=>{
  setCourse({...course,[e.target.name]:e.target.value})
}

const courseref=useRef()

const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch({type:"add",payload:course})
  setCourse({code:"",name:"",section:"",seat:""})
  courseref.current.focus()
}

  return (
   <>
     <main className="h-[94vh]  b w-full  flex flex-col justify-center items-center">
        <div className="border-2 border-black m-4 p-4 w-[80vw]  rounded">
          <label className="text-sm mb-3 block">Course Code</label>
          <div className="relative flex items-center">
            <input
            value={course.code}
            onChange={handleChange}
            ref={courseref}
              name="code"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Example:-CS-401"
            />
          </div>
          

          <label className="text-sm mb-3 mt-2 block">Course Name</label>
          <div className="relative flex items-center">
            <input
            value={course.name}
              name="name"
              onChange={handleChange}
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Example:- Web Designing"
            />
          </div>
          
          <label className="text-sm mb-3 mt-2 block">Section</label>
          <div className="relative flex items-center">
            <input
            value={course.section}
            onChange={handleChange}
              name="section"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Example:-PC-B"
            />
          </div>

          <label className="text-sm mb-3 mt-2 block">Seat Limit</label>
          <div className="relative flex items-center">
            <input
            value={course.seat}
            onChange={handleChange}
              name="seat"
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Example:-40"
            />
          </div>
          
          
       <Button handler={handleSubmit} btn="Submit"/>
        </div>
      

        <div className=" h-[50vh] w-[80vw]  m-2 py-10 bg-gray-100    border-2 border-black b rounded">
          <header className="p-2 bg-cyan-950 text-white flex text-4xl items-center border-b-2 border-black">
            Menage Course
          </header>
          <table className="border-b-2 p-2 rounded w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Course Name</th>

                <th>Course Code</th>
                <th>Section</th>
                <th>Seat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                courseData.map((e,index)=>{
                  return(
                    <tr>
                      <td>{index+1}</td>
                      <td>{e.code}</td>
                      <td>{e.name}</td>
                      <td>{e.section}</td>
                      <td>{e.seat}</td>
                      <td onClick={()=>dispatch({type:"delete",payload:e.course})}><Button btn="Delete"/></td>
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
