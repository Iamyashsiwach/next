import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectData {
  imageSrc: string;
  title: string;
  description: string;
}

const projects: ProjectData[] = [
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/48134cd88882ac904bfb59c9fdc852f99f100010329ee88cf2db355055f66e50?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d',
    title: 'CIB on the Mobile',
    description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
  },
  {
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/5a9a4f9a7b863ca486d08bbef988f820a3409def900e1aa676bd7b67fb163dc9?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d',
    title: 'CIB on the Mobile',
    description: 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section className="mt-44 max-md:mt-10 max-md:max-w-full flex justify-center items-center flex-col">
      <h2 data-layername="workExperience" className="text-4xl tracking-wider text-white max-md:ml-2">
        Work Experience
      </h2>
      <div className="self-stretch mt-11 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
        <div className="flex gap-5 justify-center flex-wrap max-md:flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              data-layername="column"
              className="flex flex-col w-6/12 max-md:w-full justify-center items-center"
            >
              {/* Replacing image with ProjectCard */}
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;