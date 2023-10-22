import React from 'react';
import { AllProjects, Navbar, PageBanner } from '../components';

const Projects = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Projects', active: true },
  ];
  return (
    <>
      <Navbar />
      <PageBanner title='Projects' breadcrumbs={breadcrumbs} />
      <AllProjects />
    </>
  );
};

export default Projects;
