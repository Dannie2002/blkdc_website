'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ShinyText from '../Components/ShinyText';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Time delay between each word
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const TransparencySlideContent = () => (
  <div className="px-4">

    <motion.h1 className='lg:text-[72px] horizon uppercase text-[#fffced] text-[60px]  mb-3'
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.5, ease: "easeInOut" }}>
          <ShinyText
          text="No Corruption Zone"
          speed={8}
          color="#ff9600"
          disabled={false}
        
          />
          </motion.h1>


    <motion.h4
      className="text-[43px] leading-[43px] md:text-[54px] md:leading-[54px] text-[#ffffff] golant mb-4 tracking-wider"
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      <motion.span className="inline-block text-[#e2efd3]" variants={letter}>Transparency</motion.span> <br/>
      <motion.span className="inline-block text-[#e2fab7]" variants={letter}>Integrity</motion.span> <br/>
      <motion.span className="inline-block text-[#e2fab7]" variants={letter}>Accountability</motion.span>
    </motion.h4>
    <motion.p
      className="text-[#fffced] text-[18px] md:w-[60%] leading-relaxed"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 1.2, ease: "easeInOut" }}
    >
      These are the cornerstones of our commitment to serving the people of Balaka. Discover our mission and values.
    </motion.p>
       <motion.a  
         className='mt-4 golant lg:text-[18px] text-center text-[#ffffff] tracking-wide bg-[linear-gradient(to_right,#4880b1,#669fca_50%,#a3cae7)] rounded-[12px] px-[20px] py-[12px] flex items-center justify-center w-48 group hover:bg-[#B8C4A9] hover:-translate-y-2 transition duration-700 ease-in-out mx-auto lg:mx-0'
         initial={{ opacity: 0, x: -60 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 1.3, ease: "easeInOut" }}
       >
         Learn More
         <ArrowUpRight className='ml-2 text-[#fffced] group-hover:text-white'/>
       </motion.a>
  </div>
);

export default TransparencySlideContent;