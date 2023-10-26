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
      <PageBanner
        title='Projects'
        breadcrumbs={breadcrumbs}
        image='https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg'
      />
      <AllProjects />
    </>
  );
};

export default Projects;
