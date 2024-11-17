import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import ProjectSection from './components/ProjectSection';
import Contact from './components/Contect';
const Home: React.FC = () => {
  return (
    <div>
  <Header />
  <Hero />
  <WorkExperience />
  <ProjectSection />
  <Contact />      
    </div>
  );
};

export default Home;