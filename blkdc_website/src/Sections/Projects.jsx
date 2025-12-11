// src/pages/Projects.jsx
import React, { useState } from "react";
import {
  allProjects,
  ongoingProjects,
  completedProjects,
} from "../Constants/data";
import ProjectList from "../Components/Projects/ProjectList";
import aboutimg from "../Assets/images/landingpage.jpg";
import ContactHeader from '../assets/Images/Contact_us.jpg'

export default function Projects() {
  const tabs = ["All Projects", "Ongoing Projects", "Completed Projects"];

  const getContentByTab = (tabName) => {
    switch (tabName) {
      case "Ongoing Projects":
        return ongoingProjects;
      case "Completed Projects":
        return completedProjects;
      default:
        return allProjects;
    }
  };

  const [activeCategory, setActiveCategory] = useState("All Projects");
  const currentContent = getContentByTab(activeCategory);

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,#fdfffb_0%,transparent_60%),radial-gradient(circle_at_bottom_right,#d9d9d9_0%,#fdfffb_0%)]">
      
      {/* Header */}
       <div className="section-header"style={{ backgroundImage: `url(${ContactHeader})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 bg-[#003521]/70  h-full w-full z-0"/>
               <h1 className="text-2xl md:text-2xl lg:text-[82px] horizon uppercase text-[#fffced]   mb-3 md:mb-4 z-10">
                 Projects
               </h1>
               <p className="text-[#eceef1] text-base md:text-[16px] max-w-xl mx-auto leading-relaxed px-4 z-10 text-center">
                 Have some questions? Feel free to contact us. We're here to help and would love to hear from you.
               </p>
             </div>

      {/* Wrapper */}
      <div className="wrapper px-6 max-w-6xl mx-auto mt-8">

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center border-b border-white/10 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base transition-all duration-300 backdrop-blur-md border 
                ${
                  activeCategory === tab
                    ? " border-b-[#003521] text-[#003521]"
                    : "bg-white/10 border-white/10 text-[#4a4a4a] hover:bg-white/20"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <ProjectList data={currentContent} />
      </div>
    </section>
  );
}
