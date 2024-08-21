import React from 'react'
import foods from '../../public/foods.json' 

const Card = () => {
    return (
        <div>
            <div>
                <div>
                     <h6 className=' text-center mt-16 text-red-500 italic' >CUSTOMER  FAVORITES</h6>
                    <h1 className='text-3xl font-semibold text-center py-4  '>Popular Catagories</h1>
                    <div className='flex flex-wrap mt-10 gap-10 items-center justify-center rounded-md '>
                        {
                            foods.map((item,idx)=>(
                                <div key={idx} className=''>
                                    <div className=''>
                                <img className=' h-[200px] w-[200px] object-cover rounded-full border-2 border-red-500  hover:scale-105' src={item?.photo} alt="" />
                                <h1 className='text-center'>{item.name}</h1>

                                    </div>
                               
                                
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            


        </div>
    )
}

export default Card
