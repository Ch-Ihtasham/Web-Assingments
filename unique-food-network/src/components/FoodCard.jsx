import React from 'react'

const FoodCard = () => {
    return (
        <div >
            <div className='bg-white w-full shadow-md relative  rounded-lg pb-9'>
                <div className='flex justify-center items-center flex-col'>
                <img className='w-full rounded-md ' src="./food5.jpg " alt="" />
                <img className='rounded-full h-11  -translate-y-1/2 ml-auto mr-4' src="./female.jpg" alt="" srcset="" />
                </div>
                <div className='pl-3'>
                <div className='font-semibold text-sm'>Sweet Creamy Cake 1 Pond</div>
                <button className='bg-[rgb(255,65,62)] text-white px-4 py-1 rounded-md mt-4 text-sm text-center'> <i className='pr-2 bx bx-cart' ></i> Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
