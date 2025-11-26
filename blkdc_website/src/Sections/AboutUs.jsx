import React from 'react'
import about_content from '../Constants/data'
import { Target, Eye } from 'lucide-react';
import population from '../Assets/images/population.svg'
import aboutimg from '../Assets/images/landingpage.jpg'
import Exc from '../Assets/images/head.jpg'
import TA from '../Assets/images/Zulusvg.svg'
import Exc2 from '../Assets/images/Exc2.jpg'
import Exc3 from '../Assets/images/Exc3.jpg'
import map from '../Assets/images/map.svg'
import {motion} from 'framer-motion'
import { gsap } from 'gsap';
import  Button  from '../Components/Button';
import leadericon from '../Assets/images/leadership.svg'
import overviewicon from '../Assets/images/overview.svg'
import {useGSAP} from '@gsap/react'



const AboutUs = () => {
  
  useGSAP(() => { // useGSAP hook for animations
    gsap.fromTo(".box", 
      { opacity: 0}, // from properties
      { opacity: 1, duration: 2.5, ease: "power3.out" } // to properties
    );
  });
  
  return (
    <section className="bg-main min-h-screen">
      <div className="wrapper mx-auto px-6 max-w-6xl py-16">
        
        {/* Heading */}
        
        <h1
          className="text-2xl lg:text-2xl text-center noffixa text-orange"
          >
            {about_content.heading}
            </h1>


        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[340px]">

          {/* Card 1 — Large Left Card */}
                <div
                className="box card relative col-span-1 lg:col-span-4 shadow-md hover:shadow-xl transition-scale duration-300  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutimg})` }}
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
           

              </div>


          {/* Card 2 — Medium */}
            <div className="card col-span-1 md:col-span-2 lg:col-span-2 bg-amber-50 shadow-md hover:shadow-xl transition duration-300">
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
          </div>

          {/* Card 3 — Short Wide */}
          <div className="card col-span-1 md:col-span-1 lg:col-span-3 bg-secondary shadow-md hover:shadow-xl transition duration-300">
           <Eye className="w-10 h-10 text-green" />
            <h4 className="text-green golant text-3xl">Our Vision</h4>
            <p className="text-neutral-700 leading-relaxed">
              We envision a resilient, thriving Balaka powered by innovation,
              accountability, and people-centered governance.
            </p>
                <Button 
            className="w-60 text-green text-center"
            textClassName="group-hover:text-white"
            text="Explore More" 
            
          />
          </div>

          {/* Card 4 — District Overview */}
          <div className="card col-span-1 md:col-span-1 lg:col-span-3 bg-secondary shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-start">
            <img className='w-10 h-10 ' src={overviewicon} alt="Overview Icon" />
            <h4 className="text-green text-3xl golant">
              District Overview
            </h4>
            <p className="text-[#0b0b0d] text-sm">
              Balaka at a glance — population, budget allocation, wards, and development focus.
            </p>
               <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="text-orange text-2xl">
                  <img className='w-16 h-16 ' src={population} alt="Population Icon" />
                </span>
                <p className="text-sm">Population</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-orange text-2xl">
                  <img className='w-16 h-16 ' src={TA} alt="T/A Icon" />
                </span>
                <p className="text-sm">T/As</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-orange text-2xl">
                  <img className='w-16 h-16 ' src={map} alt="Wards Icon" />
                </span>
                <p className="text-sm">Wards</p>
              </div>
            </div>
        
            

               <Button 
            className="w-60 text-green text-center"
            textClassName="group-hover:text-white"
            text="Explore More" 
            
          />
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs
