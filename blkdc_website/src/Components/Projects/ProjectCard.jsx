// src/components/Projects/ProjectCard.jsx
import React from "react";
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
  );
}
