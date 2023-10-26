import React from 'react'

export default function Actions({ moveItems }) {
  return (
    <div className='text-xl flex flex-col gap-5 p-5'>
      <button className='border-2 border-black rounded-md px-4 py-1 bg-red-500 font-bold hover:bg-red-600' onClick={() => { moveItems('left') }}>&lt;</button>
      <button className='border-2 border-black rounded-md px-4 py-1 bg-green-500 font-bold hover:bg-green-600' onClick={() => { moveItems('right') }}>&gt;</button>
    </div>
  )
}
