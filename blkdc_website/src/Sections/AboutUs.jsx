import React, { useEffect, useRef } from "react";
import about_content from '../Constants/data'
import { Target, Eye } from 'lucide-react';
import population from '../assets/Images/population.svg'
import aboutimg from '../Assets/images/landingpage.jpg'
import Exc from '../assets/Images/head.jpg'
import Executive from '../Assets/images/Executive.webp'
import TA from '../assets/Images/Zulusvg.svg'
import Exc2 from '../assets/Images/Exc2.jpg'
import Exc3 from '../assets/Images/Exc3.jpg'
import map from '../assets/Images/map.svg'
import {motion} from 'framer-motion'
import { gsap } from 'gsap';
import  Button  from '../Components/Button';
import leadericon from '../assets/Images/Leadership.svg'
import overviewicon from '../assets/Images/overview.svg'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardStart from '../Components/CardStart'

gsap.registerPlugin(ScrollTrigger);




const AboutUs = () => {
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
  
  useGSAP(() => { // useGSAP hook for animations
    gsap.fromTo(".box", 
      { opacity: 0}, // from properties
      { opacity: 1, duration: 4.5, ease: "power3.out" } // to properties
    );
  });
  
  return (
    <section className="bg-main min-h-screen ">
            {/* Header */}
              <div className="section-header"style={{ backgroundImage: `url(${Executive})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                     <div className="absolute inset-0 bg-[#071e07]/60  h-full w-full z-0"/>
                <h1 className="text-2xl md:text-2xl lg:text-[40px] worky text-orange  mb-3 md:mb-4 z-10">
                  About <span className=''>Us</span> 
                </h1>
                <p className="text-[#eceef1] text-base md:text-[16px] max-w-xl mx-auto leading-relaxed px-4 z-10">
                  Overview
                </p>
              </div>
      <div className="wrapper mx-auto px-6 max-w-6xl py-2 lg:p-0">
        
        {/* Bento Grid */}
        <div
        ref={gridRef}
        className="box mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[340px]"
        
        >
          {/* Card 1 — Large Left Card */}
               <CardStart
                className="relative card-gradient col-span-1 lg:col-span-4 shadow-md hover:shadow-xl transition-scale duration-300  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutimg})`,backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
              <div className="absolute inset-0 bg-[#0b0b0d]/60 rounded-xl h-full w-full z-0"/>
              <Target className="w-10 h-10 text-orange z-10" />

              <h4 className="z-10 golant text-orange text-3xl ">
              Who we are
              </h4>

              <p className="z-10 text-white/90  leading-relaxed tracking-wide">
              Our goal is to go directly to the most affected communities and ensure
              our people are met with compassion, care, and consistency.
              </p>
       
           <Button 
            className="w-60 text-green text-center"
            textClassName="group-hover:text-white"
            text="Explore More" 
            
          />
              </CardStart>


          {/* Card 2 — Medium */}
            <CardStart className="card col-span-1 md:col-span-2 lg:col-span-2 bg-[#F3E8D3] shadow-md hover:shadow-xl transition duration-300">
               <img className='w-10 h-10 ' src={leadericon} alt="Leadership Icon" />
            <h4 className="text-green golant text-2xl">Executive Management</h4>
            <p className="text-neutral-700">
              Meet our dedicated leadership team serving the people of Balaka.
            </p>

            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full object-cover" src={Exc} />
              <img className="w-10 h-10 rounded-full object-cover" src={Exc2} />
              <img className="w-10 h-10 rounded-full object-cover" src={Exc3} />
            </div>

            <Button 
            className="w-60 text-green text-center"
            textClassName="group-hover:text-white"
            text="Explore More" 
            
          />
          </CardStart>

          {/* Card 3 — Short Wide */}
          <CardStart className=" col-span-1 md:col-span-1 lg:col-span-3 bg-[#F3E8D3] shadow-md hover:shadow-xl transition duration-300">
           <Eye className="w-10 h-10 text-green" />
            <h4 className="text-green golant text-3xl">Our Vision</h4>
            <p className="text-neutral-700 leading-relaxed">
              We envision a resilient, thriving Balaka powered by innovation,
              accountability, and people-centered governance.
            </p>
                <Button 
            className="w-60 text-green text-center border-none"
            textClassName="group-hover:text-white"
            text="Explore More" 
            arrowClassName="text-orange"
            
          />
          </CardStart>

          {/* Card 4 — District Overview */}
          <CardStart className="card-gradient col-span-1 md:col-span-1 lg:col-span-3 shadow-md hover:shadow-xl transition duration-300">
            <img className='w-10 h-10 ' src={overviewicon} alt="Overview Icon" />
            <h4 className="text-green text-3xl golant">
              District Overview
            </h4>
            <p className="text-[#0b0b0d] text-sm">
              (Balaka at a glance) population, budget allocation, wards, and development focus.
            </p>
               <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="text-orange text-2xl">
                  <img className='lg:size-16 size-10' src={population} alt="Population Icon" />
                </span>
                <p className="text-sm">Population</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-orange text-2xl">
                  <img className='lg:size-16 size-10' src={TA} alt="T/A Icon" />
                </span>
                <p className="text-sm">T/As</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-orange text-2xl">
                  <img className='lg:size-16 size-10' src={map} alt="Wards Icon" />
                </span>
                <p className="text-sm">Wards</p>
              </div>
            </div>
        
            

               <Button 
            className="w-60 text-green text-center"
            textClassName="group-hover:text-white"
            text="Explore More" 
            
          />
          </CardStart>

        </div>
      </div>
    </section>
  )
}

export default AboutUs
