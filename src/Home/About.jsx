import React from 'react';
import bgImg from "../assets/images/About.jpeg"
import Man  from "../../public/Man.json"
import { FaStar } from 'react-icons/fa'

const About = () => {
    return (
        <div>
        <div className='my-10 text-center'>
        
            <div>

        
            <h1 className='text-4xl text-center font-semibold py-10'>About Us</h1>
      
          <div className='flex px-10 justify-between '>
            <img className='w-[500px]' src={bgImg} alt="" />
           
            
         
            <p className='w-1/2 text-start gap-y-5 italic '><span className='text-red-500 text-3xl'>SR</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt reprehenderit voluptate earum aliquam, impedit, illum sequi laborum esse, explicabo id fugiat autem praesentium eos eius. Accusamus, assumenda repellat. Odio ea, sequi quae delectus, minus incidunt eos unde modi fuga eveniet magnam veniam placeat. Ut ipsa, deserunt minus eligendi illum provident similique quae
            vero quis ea animi quisquam <br /><br />quas nihil voluptas. Rem voluptates vero laudantium nisi autem minus quos, labore aut dolorem dicta commodi harum, iste quibusdam, velit quidem quaerat repellendus ipsa maxime ratione. Laudantium enim culpa consequatur corporis veritatis, itaque recusandae tempore nihil asperiores fugit quidem. Voluptates sit nam quod?</p>
           
            </div>
            
            
          
            </div>
           
        </div>

  <div>
        
 <div className='text-center font-semibold text-4xl italic py-12'>
    <h1>Customer <span className='text-orange-500'>Review</span></h1>
    </div>
     <div className='flex gap-4 justify-center py-10 h-[500px] px-5 '>
       {
        Man.map((item,idx)=>(
        <div key ={idx} className='h-[200px]'>
        <div className='  bg-black text-white rounded-md '>
        <img  className='h-[200px] w-[200px] object-cover rounded-full justify-center items-center mx-auto '   src={ item?.image} alt="" />
          <h1 className='text-center font-semibold'> {item.name}</h1>
                   
                   
        <div className=' flex justify-center py-2'>
            <FaStar className='text-orange-500' ></FaStar>
            <FaStar className='text-orange-500'></FaStar>
            <FaStar className='text-orange-500'></FaStar>
       </div>             
        <h1 className=' py-8 italic text-start px-2'>{item.details}</h1>
                    




        </div>


    </div>

       ))

              }

  </div>
    </div>
     </div>

        
          
    )
}

export default About;
