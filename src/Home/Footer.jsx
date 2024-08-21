import React from 'react';
import logo from '../assets/images/logo.jpeg'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import twitter from '../assets/images/twitter.png'


const Footer = () => {
    return (  
    <div className='w-full h-60 bg-orange-500 text-white my-1 mt-10'>
      <div className='grid grid-cols-4 px-10 gap-10'>
      <div className='px-6'>
        <div className='pt-6 '>
            <img src={logo} alt="" className='w-10 rounded-full '/>
            <p className='w-64'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aperiam ad magni velit quia </p>
          
        </div>
        <div className='flex pt-3'>
           <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
           
           </div>
           </div>


  
<div className='pt-6 pl-10'>
          <h1 className='text-2xl font-semibold flex'>Usefull Links</h1>
          <ul className='pt-4'>
            <li>About Us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className='pt-6 pl-10'>
          <h1 className='text-2xl font-semibold'> Links</h1>
          <ul className='pt-4'>
            <li>About Us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className='pt-6'>
          <h1 className='text-2xl font-semibold'>Contact Us</h1>
          <p className='pt-4'>sharminred834@gmail.com</p>
          <p>+880 12234 4543</p>
        </div>


        
      </div>
     
      
   
    </div>

      
    
        
       

       


    
    );
};

export default Footer;