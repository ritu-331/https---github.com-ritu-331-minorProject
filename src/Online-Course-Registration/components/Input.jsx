import React from 'react'

export default function Input({ label, placeholder, }) {
    return (
        <>
            <div className='flex m-2 justify-center items-center'>
                <label className="text-sm mb-3 block mr-2">{label}</label>
                <div className="relative flex items-center ml-2">
                    <input name="username" type="text" required className="w-full  md:w-[20vw] text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]" placeholder={placeholder} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[18px] h-[18px] absolute right-4">
              
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
                </div>
               

            </div>
        </>
    )
}
