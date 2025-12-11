import React from 'react'
import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Button = ({arrowClassName='', text, className = '', textClassName = '', id, onClick }) => {
useEffect(() => {
  gsap.fromTo(
    ".arrow-button",
    { x: 0 },
    { 
      x: 14,  
      duration: 1.4,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true 
    }
  );
}, []);


    
  return (
  <a  className={`cta-wrapper group ${className}`} onClick={onClick} >
    <div className='mt-4 golant lg:text-[17px] text-center text-[#003521] tracking-wide bg-transparent border hover:border-none hover:text-[#fffced] border-[#003521] rounded-[12px] px-[20px] py-[12px] flex items-center justify-center w-48 group btn-fill-sweep hover:-translate-y-2 transition duration-300 ease-in-out mx-auto lg:mx-0'>
      <p className={`group-hover:text-white ${textClassName}`}>{text}</p>
       <ChevronRight className={`arrow-button ml-2 text-[#003521] group-hover:text-white ${arrowClassName}` }/>
    </div>
   
  </a>
  )
}

export default Button;
