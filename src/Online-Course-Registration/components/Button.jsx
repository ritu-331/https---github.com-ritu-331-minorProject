import React from 'react'

export default function Button({btn,handler}) {
  return (
    <>
   <button type='submit' onClick={handler} className='bg-cyan-950 text-white rounded p-2 m-2'>{btn}</button>
    </>
  )
}
