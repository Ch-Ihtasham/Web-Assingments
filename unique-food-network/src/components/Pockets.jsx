import React from 'react'

export default function pockets() {
  return (
    <div className='pt-20 pb-20 relative'>
      <div className='grid    lg:grid-cols-2 bg-[rgb(223,223,223)]  lg:h-94 md:w-12/12 lg:w-12/12 mx-auto'>
        <div>
            <div className='text-red-600 font-bold text-2xl pt-8 pb-10 pl-8'>Put us in your pocket</div>
            <div className='grid grid-cols-2 md:place-items-center pl:2 lg:pl-8 mb-8'>
                <img className='h-28' src="./barcode.png" alt="" srcset="" />
                <p className='text-gray-500 '>its all your fingertips the resturants and shops you love.Find the right food and groceries to suit your mood,and make the first bite last Go ahead, download us</p>
            </div>
            <div className='ml-14 flex gap-14 mb-6'>
                <button className='bg-black text-white px-3 py-1 rounded'>App Store</button>
                <button className='bg-black text-white px-3 py-1 rounded'>Google Play</button>
            </div>
        </div>
        <div > 
            
        </div>
      </div>
      <img  className='absolute top-0  hidden lg:h-full  lg:right-0 lg:block' src="./phone.png" alt="" srcset="" />
    </div>
  )
}
