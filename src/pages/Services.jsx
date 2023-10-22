import React from 'react';
import { Navbar, PageBanner } from '../components';

const Services = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Services', active: true },
  ];
  return (
    <>
      <Navbar />
      <PageBanner title='Services' breadcrumbs={breadcrumbs} />
    </>
  );
};

export default Services;
