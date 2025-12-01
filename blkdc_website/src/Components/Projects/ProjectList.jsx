// src/components/Projects/ProjectList.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ data }) {
  if (!data.length) {
    return <p className="text-gray-300 text-center">No projects available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {data.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
