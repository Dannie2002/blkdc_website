import React from 'react';
import aboutimg from "../Assets/images/landingpage.jpg";
import ImageSlider from '../Components/ImageSlider';
import Exc2 from '../Assets/images/Contact_us.jpg';
import Exc3 from '../Assets/images/Exc3.jpg';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Variants for the staggered text animation
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Time delay between each word
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


const slides = [
  {
    image: aboutimg,
    overlayClassName: 'bg-[#0b0b0d]/70', // Darker overlay for high-contrast text
    content: (
      <>
        <motion.h4 className="text-[43px] leading-[43px] md:text-[32px] md:leading-[20px] text-[#ffffff] golant mb-4 tracking-wider"
            initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.7, ease: "easeInOut" }}>
          Welcome to <span className="text-orange">Balaka District Council</span>
        </motion.h4>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 w-full sm:w-auto justify-start items-stretch sm:items-center">
          <a
            href="#gallery"
            className="uppercase w-full sm:w-auto text-center text-[#2a2c27] inline-flex items-center justify-center px-6 py-3 font-bold bg-[#DCD7C9] rounded-lg border-[#36515c] hover:bg-[#D6BD98] hover:border-[#d6a43a] box-border text-[16px] sm:text-[18px] shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-700 ease-in-out"
          >
            <span className="relative z-10">View Gallery</span>
          </a>
          <a
            href="#services"
            className="uppercase w-full sm:w-auto text-center hover:text-[#ffffff] inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-300 bg-transparent border-2 rounded-lg border-[#DCD7C9] box-border hover:border-none text-[16px] sm:text-[18px] shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="relative z-10">Our Services</span>
          </a>
        </div>
      </>
    ),
  },
  {
    image: Exc2,
    overlayClassName: 'bg-gradient-to-r from-[#201f1c]/85 to-[#779673]/65', // Gradient from black to a semi-transparent green
    content: (
        <>
        <div className=''>
      <motion.h4 
        className="text-[43px] leading-[43px] lg:text-[62px] lg:leading-[62px] text-[#ffffff] golant mb-4 tracking-wider"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3,ease: "easeInOut" }}
      >
        Latest <br/> <span className="text-orange">News & <span className='text-gradient-orange'>Updates</span> </span>
     </motion.h4>


      <motion.p className="text-[#fffced] text-[18px] md:w-[60%] leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9,ease: "easeInOut" }}>
       Stay informed with announcements, events, and important updates from Balaka District Council.
      </motion.p>
      <motion.a  className='mt-4 golant lg:text-[16px] text-center text-[#fffced] tracking-wide bg-[linear-gradient(to_right,#f14014,#ff5515_50%,#ff6929)] rounded-[12px] px-[20px] py-[12px] flex items-center w-46 justify-center group  hover:bg-[#B8C4A9] hover:-translate-y-2 transition duration-700 ease-in-out'
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 1.2,ease: "easeInOut" }}>
        Learn More
            <ArrowUpRight className='ml-2 text-[#fffced] group-hover:text-white'/>
        </motion.a>



</div>
      </>
    
    ),
  },
  {
    image: aboutimg,
    overlayClassName: 'bg-[#0b0b0d]/60', // A lighter, colored overlay
    content: (
      <>
        <motion.h4
          className="text-[43px] leading-[43px] md:text-[62px] md:leading-[62px] text-[#ffffff] golant mb-4 tracking-wider"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="inline-block" variants={letter}>Transparency</motion.span> <br/>
          <motion.span className="inline-block text-orange" variants={letter}>Integrity</motion.span> <br/>
          <motion.span className="inline-block text-gradient-orange" variants={letter}>Accountability</motion.span>
        </motion.h4>
        <motion.p
          className="text-[#fffced] text-[18px] md:w-[60%] leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
        >
          These are the cornerstones of our commitment to serving the people of Balaka. Discover our mission and values.
        </motion.p>
      <motion.a  className='mt-4 golant lg:text-[16px] text-center text-[#fffced] tracking-wide bg-[linear-gradient(to_right,#f14014,#ff5515_50%,#ff6929)] rounded-[12px] px-[20px] py-[12px] flex items-center w-46 justify-center group  hover:bg-[#B8C4A9] hover:-translate-y-2 transition duration-700 ease-in-out'
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 1.2,ease: "easeInOut" }}>
        Learn More
            <ArrowUpRight className='ml-2 text-[#fffced] group-hover:text-white'/>
        </motion.a>
      </>
    ),
  },
];


const Hero = () => (
  <section id="home" className="min-h-[70vh]">
    <ImageSlider slides={slides} interval={6500} className="h-screen"> {/* No children prop needed for content rendering */}
    </ImageSlider>
  </section>
);

export default Hero;