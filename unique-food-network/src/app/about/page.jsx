import React from 'react'

const page = () => {
    return (
        <div>
            {/* Food Review */}
            <div className="bg-[#FAFAFA]">
                <div className='grid lg:grid-cols-2 gap-2 pb-56 md:pb-36 lg:py-20 justify-center  items-center w-[90%] m-auto max-w-[1200px] ' >
                    <div >
                        <h2 className='text-5xl font-semibold mb-10'>Food Review</h2>
                        <p className='font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in eos natus cum, laborum, consequatur esse harum nihil ullam laudantium quam expedita temporibus neque! Culpa excepturi facilis quae dolorum voluptatibus.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore optio repellat totam esse officia inventore dolor odio dolores, sint eos vero, blanditiis et? Sapiente sequi non quam? Esse, error accusantium.
                        </p>
                    </div>


                    <div className='flex justify-center '>
                        <div className='img md:before:top-[-21%] lg:before:top-[-50%]'>
                        <img className="rounded-full  w-[220px] h-[220px] object-cover relative z-10 top-28 md:top-16 lg:top-0  " src="./fooddish.jpg" alt="Bowl of noodles with meat" />                      
                        </div>
                       
                    </div>

                </div>
            </div>

            {/* Food Order */}
            <div className='bg-[#E9F0F4] '>
                <div className=' md:flex  lg:flex w-[90%] m-auto gap-16 lg:gap-24 py-20 justify-center items-center max-w-[1200px]'>
                    <div className='flex justify-center items-center '>

                        <img className=' w-[250px] md:w-[400px] lg:w-[300px] rounded-md' src="./foodOrder.avif" alt="" />

                    </div>
                    <div className='pt-12 lg:w-[40%] md:pt-0'>
                        <h2 className='font-bold text-2xl md:text-2xl lg:text-3xl mb-10'>A very Simple Process To Order Your Favorite Food</h2>
                        <div className='flex items-center gap-3 md:text-[15px] lg:text-[17px] mb-4  text-gray-500'>
                            <i className='bx bxs-map  bg-[#E6E6E6] p-2 rounded-full'></i>
                            <h5>Set Your Location First </h5>
                        </div>
                        <div className='flex items-center gap-3 md:text-[15px] lg:text-[17px] mb-4  text-gray-500'>
                            <i className='bx bx-food-menu  bg-[#E6E6E6] p-2 rounded-full'></i>
                            <h5>Choose Your Food You Want To Order </h5>
                        </div>
                        <div className='flex items-center gap-3 md:text-[15px] lg:text-[17px] mb-4  text-gray-500'>
                            <i className='bx bx-credit-card  bg-[#E6E6E6] p-2 rounded-full'></i>
                            <h5>Confirm Your Food With Payment Mehtod </h5>
                        </div>
                        <div className='flex items-center gap-3 md:text-[15px] text-[17px] text-gray-500'>
                            <i className='bx bx-timer bg-[#E6E6E6] p-2 rounded-full'></i>
                            <h5>Within 30 minutes You Will Get Your Food </h5>
                        </div>
                        <button className='bg-[#FF8800] px-5 py-2 text-white mt-8 text-sm'>Order Now </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
