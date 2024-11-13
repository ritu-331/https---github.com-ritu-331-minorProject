import React, { useReducer, useRef, useState } from 'react'
import Button from '../components/Button'


export default function Session() {

  function dataReducer(state,action){
    switch(action.type){
      case "add":
        return[...state,action.payload]
        case "delete":
          return state.filter((e)=>
            e.session!=action.payload
          )
          default:return state
    }
  }

const [sessionData,dispatch]=useReducer(dataReducer,[])

const [session,setSession]=useState({
  session:"",
  dataTime:""
})


const handleChange=(e)=>{
  setSession({...session,[e.target.name]:e.target.value})
}

const nameref=useRef()

const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch({type:"add",payload:session})
  setSession({session:"",dataTime:""})
  nameref.current.focus()
}

  return (
   <>
     <main className="h-[94vh]  b w-full  flex flex-col justify-center items-center">
        <div className="border-2 border-black m-4 p-4 w-[80vw]  rounded">
          <label className="text-sm mb-3 block">Session Name</label>
          <div className="relative flex items-center">
            <input
            value={session.session}
            onChange={handleChange}
            name="session"
            ref={nameref}
              type="text"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="Example:-Summer-2019"
            />
          </div>
          

          <label className="text-sm mb-3 mt-2 block">Creation Date and Time</label>
          <div className="relative flex items-center">
            <input
            value={session.dataTime}
            onChange={handleChange}
              name="dateTime"
              type="datetime-local"
              required
              className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
              placeholder="40/11/2000-5PM"
            />
          </div>
          
         <Button handler={handleSubmit} btn="Submit"/>
        </div>
      

        <div className=" h-[60vh] w-[80vw]  m-2 py-10 bg-gray-100    border-2 border-black b rounded">
          <header className="p-2 bg-cyan-950 text-white  flex text-4xl items-center border-b-2 border-black">
           Menage Session
          </header>
          <table className="border-b-2 p-2 rounded w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Session</th>
                <th>Creation Date and Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                sessionData.map((e,index)=>{
                  return(
                    <tr>
                      <td>{index+1}</td>
                      <td>{e.session}</td>
                      <td>{e.dataTime}</td>
                      <td onClick={()=>dispatch({type:"delete",payload:e.session})}><Button  btn="Delete"/></td>
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
