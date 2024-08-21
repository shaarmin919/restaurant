import React from 'react'
import chef1 from '../assets/images/chef1.jpeg'
import chef2 from '../assets/images/chef2.jpeg'
import chef3 from '../assets/images/chef3.jpeg'
import chef4 from '../assets/images/chef4.jpeg'



const chef = () => {
    return (
        <div className='py-16'>
            <div className='text-center font-semibold text-3xl py-8'>
                <h1>Meet <span className=' text-red-500'>Our</span> Chefs</h1>
            </div>
            <div className='flex gap-4 flex-wrap justify-center py-5 text-center text-white '>

               <div className='bg-red-500'> 
                <img src={chef1} alt="" />
               <h1>Ching Le</h1>
               </div>

               <div className='bg-red-500'>
                <img src={chef2} alt="" />
               <h1>Emmy Doe</h1>
               </div>

               <div className='bg-red-500'>
                <img src={ chef3} alt="" />
               <h1>Karina Watson</h1>
               </div> 

                <div className='bg-red-500'>
                    <img src={ chef4} alt="" />
                    <h1>Nikhil Arora</h1>
                </div>
            

            </div>


 












            






            
        </div>
    )
}

export default chef;

