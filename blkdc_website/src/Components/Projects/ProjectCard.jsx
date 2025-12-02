// src/components/Projects/ProjectCard.jsx
import React from "react";
<<<<<<< HEAD

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-lg border border-white/10 shadow-md">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-white text-lg font-semibold">{project.title}</h3>
    </div>
=======
import Card from "../Card";


export default function ProjectCard({ project }) {
  return (
    <Card className="bg-[#cfcbc2] rounded-xl !p-0 backdrop-blur-lg  shadow-md">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="text-green text-lg font-semibold">{project.title}</h3>
      <p>..project Description </p>
    </Card>
>>>>>>> 10d54b3 (Improving the landing page)
  );
}
