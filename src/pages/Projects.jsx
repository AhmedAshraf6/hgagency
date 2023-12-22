import React from 'react';
import { AllProjects, Navbar, PageBanner } from '../components';
import { useFetchProjectsHero } from '../components/Api/fetchProjects';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Projects', active: true },
  ];
  const { data } = useFetchProjectsHero();
  return (
    <>
      <Helmet>
        <title>HG Agency - Projects</title>
        <meta name='description' content='Hg Agency Marketing Group' />
        <link rel='canonical' href='/projects' />
      </Helmet>
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
