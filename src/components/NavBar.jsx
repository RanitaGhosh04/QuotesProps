import React from 'react'
import grill from '../assets/flames.png'

function NavBar() {
  return (
    <>
    <div className='flex justify-around bg-zinc-950 border-b-[1px] border-zinc-800'>

    <div className='w-[120px] text-center'>
    <h1 className='text-3xl text-white'>
        <img src={grill} alt="" className='h-10 w-10 ml-11 mt-2'/>
        THANAL</h1>
    <p className=' text-xs font-extralight pb-2 text-white'>INDIAN TAVERN</p>
    </div>
 
    <div className='flex gap-10 pt-11 text-white'>
    <h2 className='text-xl cursor-pointer hover:text-red-600'>Home</h2>
    <h2 className='text-xl cursor-pointer hover:text-red-600'>Quote</h2>
    <h2 className='text-xl cursor-pointer hover:text-red-600'>Restaurants</h2>
    <h2 className='text-xl cursor-pointer hover:text-red-600'>Foods</h2>
    <h2 className='text-xl cursor-pointer hover:text-red-600'>Contact</h2>
    </div>


<button className='bg-red-600 h-11 rounded-sm w-[150px] mt-9 font-bold'>BOOK A TABLE</button>
</div>
    </>
  )
}

export default NavBar