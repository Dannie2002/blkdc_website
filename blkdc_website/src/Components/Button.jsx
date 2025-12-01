import React from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Button = ({arrowClassName='', text, className = '', textClassName = '', id, onClick }) => {
useEffect(() => {
  gsap.fromTo(
    ".arrow-button",
    { rotate: 0 },
    { 
      rotate: 45,  
      duration: 1.4,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true 
    }
  );
}, []);


    
  return (
  <a  className={`cta-wrapper group ${className}`} onClick={onClick} >
    <div className='cta-button btn-fill-sweep'>
      <p className={`text ${textClassName}`}>{text}</p>
       <ArrowUpRight className={`arrow-button w-6 h-6 ml-2 text-[#d99201] z-10 group-hover:text-white ${arrowClassName}` }/>
    </div>
   
  </a>
  )
}

export default Button;
