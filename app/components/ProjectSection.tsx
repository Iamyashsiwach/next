import React from 'react';
import ExampleProject from './ExampleProject';

const ProjectSection: React.FC = () => {
  const projects = [
    {
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/120255da2fb0a0757bfd84c7aea3f6348b5eae3b0a15a4c2624e3372f57dca72?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d",
      isReversed: false
    },
    {
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fd59499f6f1e3e65ba4bf71725c721322d3184592f62e6938006fbd65bc5324?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d",
      isReversed: true
    }
  ];

  return (
    <section className="flex flex-col pl-1.5 mt-48 w-full max-md:mt-10 max-md:max-w-full">
      {projects.map((project, index) => (
        <ExampleProject key={index} {...project} />
      ))}
    </section>
  );
};

export default ProjectSection;