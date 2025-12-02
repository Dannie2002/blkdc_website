// src/pages/Projects.jsx
import React, { useState } from "react";
import {
  allProjects,
  ongoingProjects,
  completedProjects,
} from "../Constants/data";
import ProjectList from "../Components/Projects/ProjectList";
import aboutimg from "../Assets/images/landingpage.jpg";

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
    <section className="min-h-screen card-gradient-super">
      
      {/* Header */}
      <div
        className="section-header relative"
        style={{
          backgroundImage: `url(${aboutimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#071e07]/60 z-0" />

        <h1 className="text-2xl md:text-3xl lg:text-[22px] worky text-orange mb-3 z-10 relative">
          Projects Overview
        </h1>

        <p className="text-center text-[#eceef1] max-w-xl mx-auto px-4 z-10 relative">
          Explore our ongoing and completed development initiatives across
          Balaka District.
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
                    ? "bg-[#828282] border-white/30 text-white shadow-lg"
                    : "bg-white/10 border-white/10 text-gray-200 hover:bg-white/20"
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
