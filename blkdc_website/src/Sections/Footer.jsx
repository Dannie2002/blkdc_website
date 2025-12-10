import React from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';
import cofarm from '../assets/Images/mw_coat of arm.png'


const Footer = () => {
  return (
    <section className='min-h-[55vh] bg-[#003521]'>

        <div className="wrapper mx-auto px-4 md:px-6 lg:max-w-6xl py-4 md:py-8">
            

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-5'>
            <div className='col-span-2'>    
                <h1 className='text-[#fffced] text-[18px] golant  mb-2'>Balaka District Council</h1>
                <div className='size-14 mb-2'>
                <img className='h-full' src={cofarm} alt='Malawi coat of arm'/>
                </div>
           <p className='tracking-[0.2px] text-[16px] text-[#fffced]'>Our goal is to go directly to the most affected communities and ensure 
                        that our people are 
                        being met with compassion, care, and consistency. 
                         </p>
                         
                         <div className='mt-4 text-green'>
                            <h1 className='tracking-wider lg:text-[14px] text-[#fffced] horizon uppercase mb-2'>Connect with us</h1>
                            <div className=' flex  gap-6 mt-4'>
                  <div className='size-10 flex-center text text-white backdrop-blur-3xl  border border-[#071e07]/20 rounded-xl'>
                    <Facebook className="text-orange" />
                  </div>
                  <div className='size-10 text text-blue-400 flex-center backdrop-blur-3xl  border border-[#071e07]/20 rounded-xl'>
                    <Instagram />
                  </div>
                  <div className='size-10 flex-center text text-green backdrop-blur-3xl  border border-[#071e07]/20 rounded-xl'>
                    <Twitter />
                  </div>
                  
                </div>
                         </div>
            </div>
            <div className='col-span-1'>
               <h1 className='text-[#fffced] text-[16px] horizon tracking-wider uppercase mb-3'>Quick Links</h1>
               <ul className='flex flex-col gap-3 text-[#fffced]'>
                <li><a href='#'>Home</a></li>
                <li><a href="">District Overview</a></li>
                <li><a href="">Wards</a></li>
                <li><a href="">Mandate</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-[#fffced] text-[16px] horizon tracking-wider uppercase mb-3'>About Us</h1>
               <ul className='flex flex-col gap-3 text-[#fffced]'>
                <li><a href='#'>Management</a></li>
                <li>District Overview</li>
                <li>Wards</li>
                <li>Dictorates</li>
                </ul>
            </div>
            <div>
                     <h1 className='text-[#fffced] text-[16px] horizon tracking-wider uppercase mb-3'>About Us</h1>
               <ul className='flex flex-col gap-3 text-[#fffced]'>
                <li><a href='#'>Management</a></li>
                <li>District Overview</li>
                <li>Wards</li>
                <li>Dictorates</li>
                </ul>
            </div>

        </div>
        

        

        </div>
        <hr className='bg-[#fffced] border-t border-[#071e07]/20'></hr>
        <p className='text-[12px] text-center py-6 text-white'>© 2025 Balaka District Council. All Rights Reserved.</p>

    </section>
  )
}

export default Footer