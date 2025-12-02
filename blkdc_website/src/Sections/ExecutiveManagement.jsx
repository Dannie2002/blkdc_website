import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import leadericon from '../Assets/images/leadership.svg';
import overviewicon from '../Assets/images/overview.svg';
import  Image  from '../Assets/images/head.jpg';
import ExcHeader from '../Assets/images/management_header.jpg'
import Exc2 from '../Assets/images/Exc2.jpg'
import Exc3 from '../Assets/images/Exc3.jpg'
import Button from '../Components/Button';
import Card from '../Components/Card.jsx';
import ProfileModal from '../Components/ProfileModal.jsx';
import {LeadersData }from '../Constants/data.js';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);


const ExecutiveManagement = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProfile = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  

  return (
<<<<<<< HEAD
    <section id='team' className="relative card-gradient-super min-h-screen">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>

            {/* Header */}
              <div className="section-header"style={{ backgroundImage: `url(${ExcHeader})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                     <div className="absolute inset-0 bg-[#071e07]/70  h-full w-full z-0"/>
                <h1 className="text-2xl md:text-2xl lg:text-[2`7px] worky text-orange  mb-3 md:mb-4 z-10">
                  Executive <span className=''>Management</span> 
                </h1>
                <p className="text-center text-[#f7fefe] text-[20px] md:text-[22px] lg:text-[22px] max-w-4xl mx-auto leading-relaxed px-4 z-10">
=======
    <section id='team' className="card-gradient-super min-h-screen">
            {/* Header */}
              <div className="section-header"style={{ backgroundImage: `url(${ExcHeader})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                     <div className="absolute inset-0 bg-[#071e07]/70  h-full w-full z-0"/>
                <h1 className="text-2xl md:text-2xl lg:text-[22px] worky text-[#ed9e50]  mb-3 md:mb-4 z-10">
                  Executive <span className=''>Management</span> 
                </h1>
                <p className="text-[#eceef1] lg:text-[18px] text-center max-w-2xl mx-auto mt-3 leading-relaxed z-10">
>>>>>>> 10d54b3 (Improving the landing page)
                Our Executive Management team brings a wealth of expertise and 
                dedication to the service of Balaka District.</p>
              </div>
      <div className="wrapper mx-auto px-4 lg:max-w-6xl py-0">
   
    <div
<<<<<<< HEAD
    ref={gridRef} className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:auto-rows-[420px] md:auto-rows-[400px] p-2">
      {LeadersData.map((LeadersData) => (
          <Card key={LeadersData.id} className="relative bg-[#efece7]">
           <span className='absolute bottom-2 h-0.5 w-24 bg-(--accent-color)'></span>             
=======
     className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:auto-rows-[400px] md:auto-rows-[400px] p-2">
      {LeadersData.map((leader, index) => (
          <Card index={index} key={leader.id} className="relative bg-secondary shadow-[0_4px_20px_rgba(0,0,0,0.06)]
">           
>>>>>>> 10d54b3 (Improving the landing page)
           <div className=" w-68 h-68 rounded-full">
            <img  src={leader.image} alt={leader.name} className="size-full object-cover rounded-full" />
          </div>
          <div className='card-gradient-super backdrop-blur-3xl rounded-xl w-full p-4 flex items-center justify-between'>
            <div>
<<<<<<< HEAD
                <h3 className="text-[22px] font-semibold text-[#f1efeb]">{LeadersData.name}</h3>
          <h4 className="text-[#fffced]">{LeadersData.position}</h4>
=======
                <h3 className=" text text-3xl font-semibold text-[#eef0ed]">{leader.name}</h3>
          <h4 className="text-[#fffced] ">{leader.position}</h4>
>>>>>>> 10d54b3 (Improving the landing page)
            </div>
        
         <a onClick={() => handleViewProfile(leader)} className='bg-[#ed8a50] rounded-full p-2 flex items-center justify-center group duration-600 transition-colors hover:bg-[#B8C4A9]'>
            <ArrowUpRight className='text-[#faf6f6] group-hover:text-white'/>
         </a>

          </div>
        </Card>
      ))}


    </div>



        </div>

        {/* Profile Modal */}
        <ProfileModal 
          open={isModalOpen}
          onClose={handleCloseModal}
          member={selectedMember}
        />

    </section>
  );
};

export default ExecutiveManagement;
