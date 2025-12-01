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
      const gridRef = useRef(null);
    
      useEffect(() => {
        const el = gridRef.current;
        gsap.fromTo(
          el,
          {opacity:0},
          {opacity:1, duration:2.5, ease:"power.out",
            scrollTrigger:{
              trigger:el,
              start:"top 85%",
              toggleActions:"play none none none",
  
            },
        }
      );
    }, []);

  return (
    <section id='team' className="bg-main min-h-screen py-12">
            {/* Header */}
              <div className="section-header"style={{ backgroundImage: `url(${ExcHeader})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                     <div className="absolute inset-0 bg-[#071e07]/60  h-full w-full z-0"/>
                <h1 className="text-2xl md:text-2xl lg:text-[40px] worky text-orange  mb-3 md:mb-4 z-10">
                  Executive <span className=''>Management</span> 
                </h1>
                <p className="text-[#eceef1] text-base md:text-[16px] max-w-xl mx-auto leading-relaxed px-4 z-10">
                Our Executive Management team brings a wealth of expertise and 
                dedication to the service of Balaka District. Learn more 
                about the individuals guiding our commitment to progress and good governance.
                </p>
              </div>
      <div className="wrapper mx-auto px-6 lg:max-w-6xl py-0">
   
    <div
    ref={gridRef} className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:auto-rows-[420px] md:auto-rows-[400px] p-2">
      {LeadersData.map((LeadersData) => (
          <Card key={LeadersData.id} className="relative bg-[#F3E8D3]">
           <span className='absolute bottom-2 h-0.5 w-24 bg-(--accent-color)'></span>             
           <div className=" w-68 h-68 rounded-full">
            <img  src={LeadersData.image} alt={LeadersData.name} className="size-full object-cover rounded-full" />
          </div>
          <div className='card-gradient-super backdrop-blur-3xl rounded-xl w-full p-4 flex items-center justify-between'>
            <div>
                <h3 className=" text text-3xl font-semibold text-[#f3e8d3]">{LeadersData.name}</h3>
          <h4 className="text-[#fffced]">{LeadersData.position}</h4>
            </div>
        
         <a onClick={() => handleViewProfile(LeadersData)} className='bg-secondary rounded-full p-2 flex items-center justify-center group transition-colors hover:bg-orange'>
            <ArrowUpRight className='text-orange group-hover:text-white'/>
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
