import React from 'react'
import profile from '../../assets/profile.png'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Profile() {
  return (
    < >

      <main className='h-[94vh]  w-full  flex justify-center items-center'>
        <div className='  py-10 bg-gray-100 px-5 mt-[40vh] sm:mt-0 border-2 border-black b rounded'>
          <header className='p-2  flex justify-evenly items-center border-b-2 border-black'>
           <div > <h1 className='text-5xl text-cyan-950'>Ritu Patel</h1>
           <p>Rituu...</p></div>
            <div>
             <Button btn="Save"/>
             <Button btn="Close"/>
            </div>
          </header>
          <div className=' w-[90vw] px-2 py-8 bg grid sm:grid-cols-2 md:grid-cols-3'>
            <div className=' border-2  border-black my-2 mx-[0.1vw] rounded p-1 flex flex-col justify-center items-center'>
              <img className='h-[200px]' src={profile} alt="" />
             <Button btn="Upload Photo"/>
              </div>
            <div className='border-2 border-black  my-2 mx-[0.1vw] rounded p-1 flex flex-col justify-center items-center'>
              
             <Input label="User Name " placeholder="Enter User Name"/>
            <Input label="Last Name" placeholder="Enter Last Name"/>
            <Input label="DOB" placeholder="Enter Data of Birth"/>
            <Input label="Age" placeholder="Enter Age"/>
            <Input label="Board" placeholder="Enter Board"/>
            <Input label="Class" placeholder="Enter Class"/>
            </div>



            <div className='  border-2 border-black my-2 mx-[0.1vw] sm:col-span-2 md:col-span-1 rounded p-1 flex flex-col justify-center items-center'>

              <div className='sm:flex md:flex-col p-2'>
           <div className='flex flex-col justify-center m-2'>   <label htmlFor="">Status: Inrolled</label>
           <select className='p-1 rounded border-2 border-black' name="" id="">
            <option value="">Action</option>
            <option value="">Email</option>
            <option value="">Enrolled</option>
            <option value="">Print Profile</option>
            <option value="">Student has left the school</option>
            <option value="">Student has been expelled</option>
            <option value="">Student has gradauted</option>
            <option value="">Set leave data</option>
            <option value="">Delete this Account</option>
            </select>
             </div>
            <div className='flex flex-col justify-center m-2'> <label htmlFor="">Subjects</label>
             <div className='bg-white h-[15vh] w-[16vw] rounded p-4'  name="" id="">Hindi</div>
            </div>
</div></div>
           
          </div>
        </div>
       
      </main>

    

     

    </>
  )
}
