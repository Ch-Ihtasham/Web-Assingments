import React from 'react'
import FoodCard from './FoodCard'

export default function PopularFood() {
    return (
        <div>
            <div className='pb-14'>
                <div className='pt-20 pb-16'>
                    <h2 className='  text-3xl    lg:text-5xl   font-bold text-center '> Popular Food</h2>
                    <p className=' md:w-3/4 lg:w-2/4 mx-auto text-center mt-3'>Completey network impactful users whereas next-generation application engage out thinking via tactical action</p>
                </div>



                <div className='grid md:grid-cols-2 lg:grid-cols-4  max-w-5xl mx-auto gap-8 w-11/12 mb-10'>


                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />



                </div>

            </div>
        </div>
    )
}
