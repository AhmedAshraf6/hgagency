import React from 'react';
import { AllServices, Navbar, PageBanner } from '../components';
import vid from '../assets/hg.mp4';

const Services = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Services', active: true },
  ];
  return (
    <>
      <Navbar />
      <PageBanner title='Services' breadcrumbs={breadcrumbs} vid={vid} />
      <AllServices />
    </>
  );
};

export default Services;
