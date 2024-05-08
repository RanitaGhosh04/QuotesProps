import React from 'react'
import insta from '../assets/instagram.png'
import facebook from '../assets/facebook.png'

function Footer() {
  return (
    <>
      <div className=' bg-yellow-500'>

        <div className='flex justify-between p-5'>
            <div className='flex justify-around gap-2'>
                <img src={insta} alt="" className=' w-10' />
                <img src={facebook} alt="" className=' w-10' />
            </div>

            <div className=' flex gap-6 align-middle'>
                <h3 className=' font-medium'>CONTACT</h3>
                <h3 className=' font-medium'>EMAIL SIGNUP</h3>
            </div>
        </div>

        <div className=' bg-black text-white text-center'>MADE BY RANITA</div>

      </div>
    </>
  )
}

export default Footer