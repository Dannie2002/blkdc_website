import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Card from '../Components/Card.jsx';
import Button from '../Components/Button.jsx';
import FilledButton from'../Components/FilledButton.jsx';
import LocationIcon from '../Components/LocationIcon.jsx';
import SendMessageForm from '../Components/SendMessageForm.jsx';
import aboutimg from '../Assets/images/landingpage.jpg'
import noise from '../Assets/images/noise.png'
import{ ScrollVelocityContainer, ScrollVelocityRow } from "../Components/ScrollVelocity.jsx";

const ContactUs = () => {

  return (
    <section className="bg-main min-h-screen py-12">
             {/* Header */}
        <div className="section-header"style={{ backgroundImage: `url(${aboutimg})` }}>
               <div className="absolute inset-0 bg-[#071e07]/60  h-full w-full z-0"/>
               <img className='absolute h-full w-full opacity-10 bg-blend-multiply' src={noise} alt='noise' />
          <h1 className="text-2xl md:text-2xl lg:text-[40px] worky text-orange  mb-3 md:mb-4 z-10">
            Contact <span className=''>Us</span> 
          </h1>
          <p className="text-[#eceef1] text-base md:text-[16px] max-w-xl mx-auto leading-relaxed px-4 z-10">
            Have some questions? Feel free to contact us. We're here to help and would love to hear from you.
          </p>
        </div>
      <div className="wrapper mx-auto px-4 md:px-6 lg:max-w-6xl py-4 md:py-8">
        
 

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 auto-rows-[300px] md:auto-rows-[250px] lg:auto-rows-[320px]">
          
          {/* Get in Touch Card - Tall card spanning 2 rows */}
          <Card className="contact-card card-gradient-super overflow-hidden border border-[#f3e8d3]/30 md:col-span-1 lg:col-span-1 row-span-1">
          <h1 className='golant text-[#f3e8d3] text-2xl'>Get in touch</h1>
          {/*icons and adjacent text vertical wrapper*/}
          <div className='flex flex-col items-start justify-center gap-3'>

                <div className='flex flex-center gap-3'>
                  <div className='size-10 flex-center backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                      <Phone className='text-orange'/>  
                  </div>
                  <h1 className='text-[#f3e8de] text-[16px] tracking-wider'>+265 99 171 3866</h1>
                </div>
                <div className='flex flex-center gap-3'>
                  <div className='size-10 flex-center backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                      <Mail className='text-orange'/>  
                  </div>
                  <p className='text-[#f3e8de] text-[16px] font-extralight tracking-wider'>info@balakadc.com</p>
                </div>
          </div>
          {/*scroll velocity*/}
          <ScrollVelocityContainer className='py-4'>
            <ScrollVelocityRow baseVelocity={5} className='p-4'>
              <div className=' flex  gap-6'>
                  <div className='size-20 flex-center text text-white backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                    icon1
                  </div>
                  <div className='size-20 text text-blue-400 flex-center backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                    icon2
                  </div>
                  <div className='size-20 flex-center text text-pink-500 backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                    icon3
                  </div>
                  
                </div>
            </ScrollVelocityRow>
                

          </ScrollVelocityContainer>
          
         
 
          </Card>

          {/* Quick Contact Card - Single row */}
          <Card className="contact-card card-gradient md:col-span-1 lg:col-span-1 row-span-1">
            <h1 className='golant text-orange text-2xl'>Address</h1>

               <div className='flex flex-col gap-2 flex-center'>
              <h1>Balaka District Council</h1>
              <p>Private Bag 1</p>
              <p>Balaka</p>
              <p>Malawi</p>
               
              </div>
         
          </Card>

          {/* Send Message Form - Wide card spanning 2 columns */}
          <Card className="card-gradient-super  md:col-span-2 lg:col-span-1 row-span-2 border-1  border-[#fffcee]/30">
           <Send className='w-10 h-10 text-orange' />
       <h1 className='text-2xl golant text-[#fffced]'>Send Message</h1>
    
      <SendMessageForm />

        <FilledButton
         className='w-full text-[#fee8d3] mt-3'
         text="Send Message"
         textClassName="group-hover:text-white"
         arrowClassName='text-[#f3e8d3]'
       />
         
          </Card>
          <Card className="contact-card card-gradient md:col-span-2 lg:col-span-2 row-span-1">
          
       <h1 className='text text-green'>Map</h1>
         
          </Card>

          

        </div>
      </div>
    </section>
  );
};

export default ContactUs;