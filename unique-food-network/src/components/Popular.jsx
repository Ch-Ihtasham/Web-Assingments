import React from 'react'
export default function Popular() {
    var arr = [1, 2, 3, 4]
    return (
        <div className='bg-[rgb(238,238,238)] '>
            <div className='mt-16 md:mt-22 lg:mt-28 pb-14  max-w-[1200px] m-auto'>
                <div className=' pt-10 md:pt-16 lg:pt-20 pb-16'>
                    <div className=' text-2xl md:lext-3xl lg:text-5xl font-bold text-center '> Popular Home Chief</div>
                    <p className='md:w-3/4 lg:w-2/4 mx-auto text-center mt-3 p-4'>Completey network impactful users whereas next-generation application engage out thinking via tactical action</p>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  mx-auto gap-8 w-11/12'>
                    {arr.map((v, i) => (
                        <div key={i} className='bg-white items-center flex-col overflow-hidden rounded-xl shadow-md'>

                            <div className='relative'>
                                <img className='w-[100%]' src="./background.jpg " alt="" />
                                <img className='rounded-full absolute -translate-x-1/2 left-1/2 -translate-y-1/2 border-4 border-white shadow-md block mx-auto w-28 h-28' src="./female.jpg" alt="" srcset="" />
                            </div>


                            <div className='mt-12 text-center p-4'>
                                <div className='text-lg font-semibold mt-2'>Jinnat Raihun Sumi</div>
                                <div className='mt-1 text-xs'>Month Top Homechief</div>
                                <button className='bg-[rgb(255,65,62)] text-xs text-white px-4 py-1 rounded-md mt-4'>
                                    <i className='mr-1 bx bxs-user'></i>Follow
                                </button>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </div>
    )
}
