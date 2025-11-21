import React from 'react'
import about_content from '../Constants/data'
import { Target, Eye} from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="bg-main min-h-screen">
      <div className="wrapper mx-auto px-6 max-w-7xl py-16">
        
        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl text-center mofine text-orange font-semibold">
          {about_content.heading}
        </h1>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[200px]">

          {/* Card 1 — Large Left Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-secondary rounded-xl p-6 items-start justify-center lg:space-y-2 flex-col  shadow-md hover:shadow-xl transition-shadow duration-300">
              <Target className="w-6 h-6 text-orange" />
            <h4 className="mofine text-green text-xl font-semibold">Who we are</h4>
            <p className="text-neutral-700 mt-3 leading-relaxed">
              Our goal is to go directly to the most affected communities and ensure
              our people are met with compassion, care, and consistency.
            </p>
            <button className="text-sm text-orange font-semibold mt-4 hover:underline flex items-center gap-2">
              Learn More →
            </button>
          </div>

          {/* Card 2 — Medium */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 bg-[#E2F3D9] rounded-xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition duration-300">
           <Eye className="w-6 h-6 text-orange" />
            <h4 className="text-green golant text-xl font-semibold">Our Vision</h4>
            <p className="text-neutral-700 mt-3 leading-relaxed">
              We envision a resilient, thriving Balaka powered by innovation,
              accountability, and people-centered governance.
            </p>
            <button className="text-sm text-orange font-semibold mt-4 hover:underline flex items-center gap-2">
              Learn More →
            </button>
          </div>

          {/* Card 3 — Short Wide */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#DCEFE2] rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between">
            <h4 className="text-green-900 text-xl font-semibold">Council Leadership</h4>
            <p className="text-neutral-700 mt-3">
              Meet our dedicated leadership team serving the people of Balaka.
            </p>

            <div className="flex mt-4 -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="/team1.jpg" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="/team2.jpg" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="/team3.jpg" />
            </div>

            <button className="text-sm text-orange font-semibold mt-4 hover:underline">
              View Team →
            </button>
          </div>

          {/* Card 4 — District Overview */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 bg-secondary rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between">
            <h4 className="text-green-900 text-xl font-semibold">
              District Overview
            </h4>
            <p className="text-neutral-700 mt-2 text-sm">
              Balaka at a glance — population, budget allocation, wards, and development focus.
            </p>

            <div className="flex gap-6 mt-4">
              <div className="flex flex-col items-center">
                <span className="text-orange text-2xl">👥</span>
                <p className="text-sm">Population</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-orange text-2xl">💰</span>
                <p className="text-sm">Budget</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-orange text-2xl">📍</span>
                <p className="text-sm">Wards</p>
              </div>
            </div>

            <button className="text-sm text-orange font-semibold mt-4 hover:underline">
              Learn More →
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs
