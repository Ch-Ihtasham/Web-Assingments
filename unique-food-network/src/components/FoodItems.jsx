import React from 'react'

export default function FoodItems() {
  return (
    < >
   <div className=' grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center mt-10'>
   <div className=' text-center flex justify-center items-center flex-col' >
        <img className=' h-54 rounded-full ' src="./food1.jpg" alt="" />
        <div className='font-bold mt-4'>Choose Your Favorite</div>
    </div>
    <div className=' text-center flex justify-center items-center flex-col'>
        <img className=' h-54 rounded-full' src="./food2.jpg" alt="" />
        <div className='font-bold mt-4'>Our Chief Will Cook</div>
    </div>
    <div className=' text-center flex justify-center items-center flex-col'>
        <img className=' h-54 rounded-full' src="./food3.jpg" alt="" />
        <div className='font-bold mt-4'>We Deliver Your Meal</div>
    </div>
    <div className=' text-center flex justify-center items-center flex-col'>
        <img className=' h-54 rounded-full' src="./food4.jpg" alt="" />
        <div className='font-bold mt-4'>Eat and Enjoy</div>
    </div>
   </div>
    </>
  )
}
