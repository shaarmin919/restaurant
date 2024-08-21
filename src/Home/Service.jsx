import React from 'react';
import Quality from "../../public/Quality.json"
import Delivery from '../../public/Delivery.json'
import Order from "../../public/Order.json"
import Hygienic from "../../public/Hygienic.json"
import Budget from "../../public/Budget.json"
import Lottie from 'lottie-react';

const Service = () => {
    return (
        <div className=''>
            <div><h1 className='text-center py-10 text-3xl font-semibold my-8 '><span className='text-red-500 text-4xl'>O</span>ur Service</h1>
            </div>
        <div className='text-center flex gap-9 justify-center'>
            
            <div className='bg-slate-300 rounded-2xl p-2'>
                <h>Best Quality</h>
            <Lottie animationData={Quality} className='w-32'></Lottie>
            </div>
            <div className='bg-slate-300 rounded-2xl p-2'>
                <h1>Fast Delivery</h1>
                <Lottie animationData={Delivery} className='w-32'></Lottie>
            </div>
            <div className='bg-slate-300 rounded-2xl p-2'>
                <h1>Easy to Order</h1>
                <Lottie animationData={Order} className='w-32'></Lottie>

            </div>
            <div className='bg-slate-300 rounded-2xl p-2'>
                <h1>Hygienic</h1>
                <Lottie animationData={Hygienic} className='w-32'></Lottie>
            </div>
            <div className='bg-slate-300 rounded-2xl p-2'>
                <h1>Budget Friendly</h1>
                <Lottie animationData={Budget} className='w-32'></Lottie>
            </div>
            </div>
            </div>
             
    );
};

export default Service;
