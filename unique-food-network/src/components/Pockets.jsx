import React from 'react'

export default function pockets() {
  return (
    <div className='pt-[15%] pb-20 relative border-t border-gray-400 '>
      <div className='grid    lg:grid-cols-2 bg-[rgb(223,223,223)]  lg:h-94 md:w-11/12 lg:w-12/12 mx-auto rounded-lg relative max-w-[1200px] m-auto'>
        <div className='pl-8 pb-10'>
          <div className='text-[rgb(255,65,62)] font-bold text-2xl pt-8 pb-10'>Put us in your pocket</div>
          <div className='flex gap-4  mb-8'>
            <img className='h-28' src="./barcode.png" alt="" srcset="" />
            <p className='text-gray-500 '>its all your fingertips the resturants and shops you love.Find the right food and groceries to suit your mood,and make the first bite last Go ahead, download us</p>
          </div>
          <div className='flex gap-4  '>
            <img className='rounded w-[25%]' src="./appstore.png" alt="" />
            <img className='rounded w-[25%]' src="./googleplay.png" alt="" />
          </div>
        </div>
        <div className='flex justify-center items-center' >
          <img className='w-[57%] bottom-[-75px]  right-0  xl:absolute' src="./phone.png" alt="" srcset="" />
        </div>
      </div>

    </div>
  )
}
