import React from 'react';
import { AllProjects, Navbar, PageBanner } from '../components';
import { useFetchProjectsHero } from '../components/Api/fetchProjects';

const Projects = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Projects', active: true },
  ];
  const { data } = useFetchProjectsHero();
  return (
    <>
      <Navbar />
      <PageBanner
        title={data?.title}
        breadcrumbs={breadcrumbs}
        image={data?.img}
      />
      <AllProjects />
    </>
  );
};

export default Projects;
