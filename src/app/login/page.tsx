import React from 'react'
import Link from 'next/link'

const details = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-green-50 h-screen boder-2 border-gray-400'>
        <h1 className='mt-0 mb-20 text-blue-950 font-bold text-3xl '>Enter Your Details</h1>
      <div className='flex flex-col justify-center items-center space-y-4   max-w-[1000px] '>
        <input type="text" placeholder='Enter your Name' className='mt- py-1 px-8' />
        <input type="email" placeholder='Enter your Email' className='py-1 px-8' />
        <input type="number" placeholder='Card Number' className='py-2 px-8' />
        <input type="text" placeholder='Address' className='py-1 px-8' />
     <Link href="/thanks">  <button className=" bg-blue-700 text-white text-sm mb-10 px-6 py-4 border-1 border-gray-600 font-semibold rounded-lg transition duration-200 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-105 active:scale-95">
            place your order</button></Link> 
        
      </div>
    </div>
  )
}

export default details