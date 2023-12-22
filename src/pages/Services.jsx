import React from 'react';
import {
  AllServices,
  FaqServiceSection,
  Navbar,
  PageBanner,
} from '../components';
import vid from '../assets/hg.mp4';
import { useFetchServicesHero } from '../components/Api/fetchServices';

const Services = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Services', active: true },
  ];
  const { data } = useFetchServicesHero();

  return (
    <>
      <Navbar />
      <PageBanner
        title={data?.title}
        breadcrumbs={breadcrumbs}
        vid={data?.vid}
      />
      <AllServices />
      <FaqServiceSection />
    </>
  );
};

export default Services;
