import React from 'react'

export default function FoodItems() {
  return (
    < >
      <div className=' grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center mt-10 max-w-5xl mx-auto'>
        <div className=' text-center flex justify-center items-center flex-col  relative' >
          <img className=' h-[170px] rounded-full ' src="./food1.jpg" alt="" />
          <p className='font-semibold mt-4'>Choose Your Favorite</p>
          <div className='  flex items-center justify-center bg-[rgb(223,4,4)] absolute top-0 right-[1%] md:right-[31%] lg:right-8   rounded-[100%] h-[50px] w-[50px] border-4 border-white'>
            <p className=' text-white   text-center text-xs '>01 <br /> STEP</p>
          </div>
        </div>
        <div className=' text-center flex justify-center items-center flex-col relative'>
          <img className=' h-[170px]  rounded-full' src="./food2.jpg" alt="" />
          <div className='font-semibold mt-4'>Our Chief Will Cook</div>
          <div className='  flex items-center justify-center bg-[rgb(223,4,4)] absolute top-0 right-[1%] md:right-[31%] lg:right-8  rounded-[100%] h-[50px] w-[50px] border-4 border-white'>

            <p className=' text-white   text-center text-xs '>02 <br /> STEP</p>
          </div>
        </div>
        <div className=' text-center flex justify-center items-center flex-col relative'>
          <img className=' h-[170px]  rounded-full' src="./food3.jpg" alt="" />
          <div className='font-semibold mt-4'>We Deliver Your Meal</div>
          <div className='  flex items-center justify-center bg-[rgb(223,4,4)] absolute top-0 right-[1%] md:right-[31%] lg:right-8  rounded-[100%] h-[50px] w-[50px] border-4 border-white'>

            <p className=' text-white   text-center text-xs '>03 <br /> STEP</p>
          </div>
        </div>
        <div className=' text-center flex justify-center items-center flex-col relative'>
          <img className=' h-[170px]  rounded-full' src="./food4.jpg" alt="" />
          <div className='font-semibold mt-4'>Eat and Enjoy</div>
          <div className='  flex items-center justify-center bg-[rgb(223,4,4)] absolute top-0 right-[1%] md:right-[31%] lg:right-8  rounded-[100%] h-[50px] w-[50px] border-4 border-white'>

            <p className=' text-white   text-center text-xs '>04 <br /> STEP</p>
          </div>
        </div>
      </div>
    </>
  )
}
