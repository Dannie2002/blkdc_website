'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const WelcomeSlideContent = () => (
  <div className="px-4">
    <motion.h4 
      className="text-[43px] leading-[42px] lg:text-[62px] lg:leading-[62px] text-[#e2fab7] golant mb-4 tracking-wider"
      initial={{ opacity: 0, x: -400 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.7, ease: "easeInOut" }}
    >
      Building a Better<br/> <span className="text-gradient-blue">Balaka<br/> Together</span>
    </motion.h4>
    <motion.p
      className="text-[#fffced] text-[18px] md:w-[60%] leading-relaxed"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9, ease: "easeInOut" }}
    >
      Your official portal for community services, district development projects, and transparent governance. We are committed to fostering growth and improving the lives of our citizens.
    </motion.p>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 w-full sm:w-auto justify-start items-stretch sm:items-center">
     <motion.a  
      className='mt-4 golant lg:text-[16px] text-center text-[#fffced] tracking-wide bg-[linear-gradient(to_right,#4880b1,#669fca_50%,#a3cae7)] rounded-[12px] px-[20px] py-[12px] flex items-center justify-center group hover:bg-[#B8C4A9] hover:-translate-y-2 transition duration-700 ease-in-out mx-auto lg:mx-0'
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 1.2, ease: "easeInOut" }}
    >
      Explore Services
      <ArrowUpRight className='ml-2 text-[#fffced] group-hover:text-white'/>
    </motion.a>
       <motion.a  
      className='mt-4 golant lg:text-[16px] text-center text-[#fffced] tracking-wide bg-transparent border border-white/80 rounded-[12px] px-[20px] py-[12px] flex items-center justify-center group hover:bg-white/10 hover:-translate-y-2 transition duration-700 ease-in-out mx-auto lg:mx-0'
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 1.4, ease: "easeInOut" }}
    >
      District Overview
      <ArrowUpRight className='ml-2 text-[#fffced] group-hover:text-white'/>
    </motion.a>
    </div>
  </div>
);

export default WelcomeSlideContent;