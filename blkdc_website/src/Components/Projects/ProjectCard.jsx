// src/components/Projects/ProjectCard.jsx
import React from "react";
import Card from "../Card";
import FilledBotton from "../FilledButton.jsx";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#f7f7f7] rounded-xl shadow-md h-84  flex flex-col items-center text-start border border-[#e6e7f5] hover:shadow-lg transition">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="text-green text-lg font-semibold">{project.title}</h3>
      <p>..project Description </p>
      <FilledBotton 
        text="Learn More"
        className="mt-auto mb-4"
      />
    </div>
  );
}
