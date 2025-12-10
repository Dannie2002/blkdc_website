"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const NewsSlideContent = () => (
  <div className="px-4">
    <h1 className='lg:text-[22px] lg:leading-[22px] text-[#e2fab7] horizon uppercase  text-[14px]  mb-3'>
          Stay Informed
          </h1>
    <motion.h4 
      className="text-[53px] leading-[53px] lg:text-[72px] lg:leading-[72px] text-[#e2fab7] pasbile mb-4 tracking-wider"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
    >
      Latest <br/> <span className="text-[#E2852E]">News & <span className='text-[#e2fab7]'>Updates</span> </span>
    </motion.h4>

    <motion.p 
      className="text-[#fffced]  sm:w-[40%] text-[18px] md:w-[60%] leading-relaxed"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9, ease: "easeInOut" }}
    >
      Stay informed with announcements, events, and important updates from Balaka District Council.
    </motion.p>

     <motion.a  
                  className='mt-4 golant lg:text-[18px] text-center text-[#ffffff] tracking-wide bg-[linear-gradient(to_right,#4880b1,#669fca_50%,#a3cae7)] rounded-[12px] px-[20px] py-[12px] flex items-center justify-center w-48 group hover:bg-[#B8C4A9] hover:-translate-y-2 transition duration-700 ease-in-out mx-auto lg:mx-0'
                 initial={{ opacity: 0, x: -60 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
                        >
         Learn More
       <ArrowUpRight className='ml-2 text-[#fffced] group-hover:text-white'/>
     </motion.a>
  </div>
);

export default NewsSlideContent;