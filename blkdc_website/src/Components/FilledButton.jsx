import React from 'react'
import { ArrowRight } from 'lucide-react';
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
    <div className='cta-button-filled'>
      <p className={`text ${textClassName}`}>{text}</p>
       <ArrowRight className={`arrow-button w-5 h-5 ml-2 text-[#d99201] z-10 group-hover:text-white ${arrowClassName}` }/>
    </div>
   
  </a>
  )
}

export default Button;
