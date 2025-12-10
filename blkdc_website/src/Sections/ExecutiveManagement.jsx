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
import { motion } from 'framer-motion';
import management from '../Assets/images/Team2.jpg'

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
    <section id='team' className="bg-[radial-gradient(circle_at_top_left,#fdfffb_0%,transparent_60%),radial-gradient(circle_at_bottom_right,#d9d9d9_0%,#fdfffb_0%)] pb-24 min-h-screen">
            {/* Header */}
              {/* Added h-64 for a fixed height */}
              <div
  className="section-header h-64 md:h-80 lg:h-[400px] border-b-2 border-[#4a4a4a]/20 relative flex items-center justify-center"
>
     <h1 className="lg:text-[72px] text-[34px] text-center uppercase golant text-[#fffced] mb-8 z-10">Executive Management</h1>
  <div className="absolute inset-0 bg-[#003521]/60 z-0" />
  {/* Optional: Add a title or content here */}
</div>
      <div className="wrapper mx-auto px-4 lg:max-w-6xl  py-0">

    <div
     className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {LeadersData.map((leader, index) => (
          <div key={leader.id} className="rounded-[12px] shadow-md p-8 flex bg-[#f6f6f7]  flex-col items-center text-center hover:shadow-lg transition">
            <div className="w-36 h-36 rounded-full mb-4 overflow-hidden">
              <img src={leader.image} alt={leader.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="golant text-[18px] tracking-wide text-[#4a4a4a] mb-2">{leader.name}</h3>
            <h4 className="text-[#003521] text-[16px] tracking-wide uppercase mb-3">{leader.position}</h4>

          <motion.a  
          onClick={() => handleViewProfile(leader)}
                        className='mt-4 golant lg:text-[17px] text-center text-[#003521] tracking-wide bg-transparent border hover:border-none hover:text-[#fffced] border-[#003521] rounded-[12px] px-[20px] py-[12px] flex items-center justify-center w-48 group btn-fill-sweep hover:-translate-y-2 transition duration-300 ease-in-out mx-auto lg:mx-0'
                       initial={{ opacity: 0, x: -60 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
                              >
               <span className="group-hover:text-white">Learn More</span>
             <ArrowUpRight className='ml-2 text-[#003521] group-hover:text-white'/>
           </motion.a>
          </div>
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
