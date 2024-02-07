import React from 'react'

export default function Fotter() {
  return (
    <div className='bg-[rgb(217,217,217)] '>
      <div className='text-center max-w-[1200px] m-auto'>
        <h2 className='text-xl md:text-3xl lg:text-4xl  font-semibold  text-center mt-3 pt-10'>Lets Keep in touch !</h2>
        <p className=' md:w-3/4 lg:w-2/4 mx-auto text-center mt-3 text-gray-600'>Find us on any of these platforms,we respond within 1-2 business days.</p>
        <div className='text-[rgb(255,65,62)] text-[25px] flex justify-center items-center gap-3 mt-4'>
          <i class='bx bxl-facebook' ></i>
          <i class='bx bxl-xing' ></i>
          <i class='bx bxl-youtube' ></i>
          <i class='bx bxl-linkedin' ></i>
        </div>
        <p className='border-t border-gray-700 mt-8 mb-8'></p>
        <p className='text-center text-gray-600 pb-5'>@2024 Sgri Veg All Rights Reserved.</p>
      </div>
    </div>

  )
}
