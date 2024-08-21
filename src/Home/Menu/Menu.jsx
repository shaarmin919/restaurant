import React from 'react'
import Food from '../../../public/Food.json'
import { FaStar } from 'react-icons/fa'


const Menu = () => {
    return (
        <div className=''>
            <div className='py-5'>
                <h1 className='text-center w-2/3 font-semibold text-3xl'>OUR MENU</h1>
                
                <div className='flex text-center justify-center gap-8 mt-10 w-2/3' >
                    <button className=' btn bg-red-500 text-white'>All</button>
                    <button className= 'btn bg-red-500 text-white'>Break Fast</button>
                    <button className= 'btn bg-red-500 text-white'>Lunch</button>
                    <button className= 'btn bg-red-500 text-white'>Shakes</button>
                    </div>
                    <div className='flex'>
                    <div className='flex w-2/3 gap-4 flex-wrap justify-center py-10  '>
                    {
                        Food.map(( item,idx)=>(
                            <div key= {idx} className=''>
                                <div className='border-2  border-red-500  hover:scale-105 rounded-md'>
                                     <img  className='h-[200px] w-[200px] object-cover  '    src={ item?.image} alt="" />
                                    <h1 className='text-center'>{item.name}</h1>
                                    <h1 className='text-center'>${item.price}</h1>
                                    <button className='btn ' >Order</button>

                                    <div className=' flex justify-center py-2'>
                                    <FaStar className='text-red-500' ></FaStar>
                                    <FaStar className='text-red-500'></FaStar>
                                    <FaStar className='text-red-500'></FaStar>
                                    </div>
                                    </div>
                                </div>
                                

                                
                           
                 ))}         
 </div>

 <div className='text-center w-96 mt-5 pr-32'>
    <h1 className='text-2x1 '>See Your Order List</h1>
   </div>

                </div>
              



   

   </div>
  
        </div> 
    )
}

export default Menu;
