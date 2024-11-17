import React from 'react';
import Image from 'next/image';

// Define Project interface
interface Project {
  title: string;
  description: string;
  imageSrc: string;  // Updated to use imageSrc
}

// Define component props
interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

// React Function Component with TypeScript
const ProjectCard: React.FC<ProjectCardProps> = ({ project, reversed = false }) => {
  return (
    <div className="relative w-full py-16">
      <div
        className={`max-w-6xl mx-auto px-4 flex flex-col lg:items-center gap-8 ${
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-4">
          <p className="text-purple-400 text-sm font-medium">Featured Project</p>
          <h2 className="text-white text-3xl font-bold">{project.title}</h2>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
          <div className="flex gap-2">
            {/* Example icons or placeholders */}
            <div className="w-6 h-6 bg-purple-500 rounded-full" />
            <div className="w-6 h-6 bg-purple-500 rounded-full" />
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <div className="relative w-full aspect-[4/3] bg-white rounded-lg overflow-hidden">
            <Image
              src={project.imageSrc}  // Updated to use imageSrc
              alt={project.title}
              layout="fill"
              objectFit="cover" // Ensures the image is properly scaled within the container
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;