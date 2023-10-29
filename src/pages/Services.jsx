import React from 'react';
import {
  AllServices,
  FaqServiceSection,
  Navbar,
  PageBanner,
} from '../components';
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
      <FaqServiceSection />
    </>
  );
};

export default Services;
