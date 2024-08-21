import React from 'react';
import banner from '../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className='relative py-0'>
            <div className=''>
                <img src={banner} className='w-full h-[500px] object-cover' alt="" />
                </div>
                <div className='w-1/2 absolute top-1/3 text-white left-60 '>
                   <h1 className='text-4xl font-bold text-center mx-auto'>Welcome To Our Restaurant Website</h1>
                   <p  className='mt-6'>The restaurant has a cozy, welcoming atmosphere that makes you feel right at home.The prices are reasonable for the quality of food and service provided </p>
                
                <div className='mt-10 ' >
                    <button className='btn bg-red-500 text-white'>Food Order New</button>
                    <button className='btn mx-8'>Details</button>
                </div>  
                </div>
        </div>
    
    )
}

export default Banner;

