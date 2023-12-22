import React from 'react';
import {
  AllServices,
  FaqServiceSection,
  Navbar,
  PageBanner,
} from '../components';
import vid from '../assets/hg.mp4';
import { useFetchServicesHero } from '../components/Api/fetchServices';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Services', active: true },
  ];
  const { data } = useFetchServicesHero();

  return (
    <>
      <Helmet>
        <title>HG Agency - Services</title>
        <meta name='description' content='Hg Agency Marketing Group' />
        <link rel='canonical' href='/services' />
      </Helmet>
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
