import React from 'react'
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Button = ({ text, className = '', textClassName = '', id, onClick }) => {
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
  <a className={`cta-wrapper group ${className}`} onClick={onClick} >
    <div className='cta-button btn-fill-sweep'>
      <p className={`text ${textClassName}`}>{text}</p>
       <ArrowRight className='arrow-button w-5 h-5 ml-2 text-amber-500 z-10 group-hover:text-white' />
    </div>
   
  </a>
  )
}

export default Button;
