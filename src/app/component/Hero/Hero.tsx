import React from 'react'
import { TiTick } from "react-icons/ti";

const Hero = () => {
  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center'>
      <div className='bg-white    p-6 max-w-[1000px]   '>
      <div className='border-top border-gray-100 border-2' >
        <h1 className='text-center text-3xl font-bold text-gray-700 mt-10 mb-4 border-white boder-2 border-b-0 border-opacity-95'>Sell Your Car on PakWheels and Get the Best Price</h1>
      </div> 
      
      <div className='flex justify-center space-y-8  border-t-0 border-l-2 border-gray-100 border-2 border-opacity-90'>
        
        <div className='flex flex-col items-center   p-10 rounded '>
          <h1 className='text-blue-950 font-semibold text-lg  mb-2 mt-2'>Post your Ad on PakWheel</h1>
          <div className="flex items-center">
            <TiTick className='text-green-500 ' />
            <h4 className=' test-sm text-blue-950  mb-2'>Post your Ad for Free in 3 Easy Steps</h4>
          </div>
          <div className="flex items-center">
            <TiTick className='text-green-500' />
            <h4 className=' test-sm text-blue-950 '>Get Genuine offers from Verified Buyers</h4>
          </div>
          <div className="flex items-center  border-gray-300 p-2 rounded">
            <TiTick className='text-green-500' />
            <h4 className=' test-sm test-pretty text-blue-950   mb-2'>Sell your car Fast at the Best Price</h4>
          </div>
          <button className=" px-14 py-2 bg-red-800 text-white rounded">Post Your Ad</button>
        </div>
        <div className='flex items-center boder border-gray-300 p-4 rounded'>
          <h1 className='text-3xl font-bold text-gray-500'>OR</h1>
        </div>

        <div className='flex flex-col items-center space-y-2 border-r-2 border-gray-100  p-4 rounded '>
          <h1 className='text-blue-950 font-semibold text-lg  mb-0'>Try PakWheels Sell It For Me</h1>
          <div className="flex items-center">
            <TiTick className='text-green-500' />
            <h4 className='ml-2 test-sm text-blue-950  mb-0 '>Dedicated Sales Expert to Sell your Car</h4>
          </div>
          <div className="flex items-center">
            <TiTick className='text-green-500' />
            <h4 className='ml-2 test-sm text-blue-950 mb-0 '>We Bargain for you and share the Best Offer</h4>
          </div>
          <div className="flex items-center">
            <TiTick className='text-green-500' />
            <h4 className='ml-2 text-sm text-blue-950  mb-3  '>We ensure Safe & Secure Transaction</h4>
          </div>
          <button className="mt-6 px-10 py-2 bg-blue-500 text-white rounded">Register Your Car</button>
        </div>

      </div> 
      </div>
    </div>



  )
}

export default Hero
