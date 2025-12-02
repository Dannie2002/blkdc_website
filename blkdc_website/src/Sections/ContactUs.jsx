import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Facebook, Instagram, Twitter } from 'lucide-react';
import Card from '../Components/Card.jsx';
import Button from '../Components/Button.jsx';
import FilledButton from'../Components/FilledButton.jsx';
import LocationIcon from '../Components/LocationIcon.jsx';
import SendMessageForm from '../Components/SendMessageForm.jsx';
import aboutimg from '../Assets/images/landingpage.jpg'
import ContactHeader from '../assets/Images/Contact_us.jpg'
import noise from '../Assets/images/noise.png'
import{ ScrollVelocityContainer, ScrollVelocityRow } from "../Components/ScrollVelocity.jsx";
import CardStart from '../Components/CardStart.jsx';

const ContactUs = () => {

  return (
    <section className="bg-main min-h-screen py-12">
             {/* Header */}
        <div className="section-header"style={{ backgroundImage: `url(${ContactHeader})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
               <div className="absolute inset-0 bg-[#071e07]/70  h-full w-full z-0"/>
               <img className='absolute h-full w-full opacity-10 bg-blend-multiply' src={noise} alt='noise' />
          <h1 className="text-2xl md:text-2xl lg:text-[24px] worky text-orange  mb-3 md:mb-4 z-10">
            Contact <span className=''>Us</span> 
          </h1>
          <p className="text-[#eceef1] text-base md:text-[16px] max-w-xl mx-auto leading-relaxed px-4 z-10 text-center">
            Have some questions? Feel free to contact us. We're here to help and would love to hear from you.
          </p>
        </div>
      <div className="wrapper mx-auto px-4 md:px-6 lg:max-w-6xl py-4 md:py-8">
        
 

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 auto-rows-[300px] md:auto-rows-[250px] lg:auto-rows-[320px]">
          
          {/* Get in Touch Card - Tall card spanning 2 rows */}
          <CardStart className="contact-card flex items-center justify-center card-gradient-super overflow-hidden border border-[#f3e8d3]/30 md:col-span-1 lg:col-span-1 row-span-1">
          <h1 className='golant text-[#f3e8d3] text-2xl'>Balaka District Council<br/>Contact Details</h1>
          {/*icons and adjacent text vertical wrapper*/}
          <div className='flex flex-col  items-start justify-center gap-2 lg:gap-3'>

                <div className='flex flex-center gap-3'>
                  <div className='lg:size-12 size-10 flex-center backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                      <Phone className='text-orange '/>  
                  </div>
                  <h1 className='text-[#f3e8de] lg:text-[16px] text-[14px] tracking-wider'>+265 99 171 3866</h1>
                </div>
                <div className='flex  flex-center gap-3'>
                  <div className='size-10 lg:size-12 flex-center backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                      <Mail className='text-orange'/>  
                  </div>
                  <p className='text-[#f3e8de] lg:text-[16px] text-[14px] font-extralight tracking-wider'>info@balakadc.com</p>
                </div>
          </div>
          {/*scroll velocity*/}
          <ScrollVelocityContainer className=''>
            <ScrollVelocityRow baseVelocity={14} className='lg:p-0'>
              <div className=' flex  gap-6 min-w-[400px]'>
                  <div className='lg:size-14 size-14 flex-center text text-white backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                    <Facebook className="text-orange" />
                  </div>
                  <div className='lg:size-14 size-14 text text-blue-400 flex-center backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                    <Instagram />
                  </div>
                  <div className='lg:size-14 size-14 flex-center text text-green backdrop-blur-3xl  border border-[#fffced]/20 rounded-xl'>
                    <Twitter />
                  </div>
                  
                </div>
            </ScrollVelocityRow>
                

          </ScrollVelocityContainer>
          
         
 
          </CardStart>

          {/* Quick Contact Card - Single row */}
          <CardStart className="relative contact-card bg-secondary md:col-span-1 lg:col-span-1 row-span-1"> 
            <h1 className='golant text-green text-2xl'>Postal Address</h1>

               <div className='flex text-[#171104] flex-col space-y-3'>
                <h1>The District Commissioner</h1>
              <h1>Balaka District Council</h1>
              <p>Private Bag 1</p>
              <p>Balaka</p>
              <p>Malawi</p>
               
              </div>
         
          </CardStart>

          {/* Send Message Form - Wide card spanning 2 columns */}
          <Card className="card-gradient-super  md:col-span-2 lg:col-span-1 row-span-2 border-1  border-[#fffcee]/30">
           <Send className='w-10 h-10 text-orange' />
       <h1 className='text-2xl golant text-[#f3e8d3]'>Send Message</h1>
    
      <SendMessageForm />

        <FilledButton
         className='w-full text-[#fee8d3] mt-3'
         text="Send Message"
         textClassName="group-hover:text-white"
         arrowClassName='text-[#f3e8d3]'
       />
         
          </Card>
<Card className="contact-card bg-secondary md:col-span-2 lg:col-span-2 row-span-1 !p-0">
  <div className="w-full h-full rounded-xl overflow-hidden">
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.922698441944!2d34.9556!3d-14.9971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921e80e146fd999%3A0xeeb8c3782c508d57!2sBalaka%20District%20Council!5e0!3m2!1sen!2smw!4v1700000000000"
    ></iframe>
  </div>
</Card>


          

        </div>
      </div>
    </section>
  );
};

export default ContactUs;