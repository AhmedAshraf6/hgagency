import React from 'react';
import { AllProjects, ContactInfo, Navbar, PageBanner } from '../components';
import GoogleMap from '../components/GoogleMap';
import { useFetchContactHero } from '../components/Api/fetchContact';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Contact Us', active: true },
  ];
  const { data } = useFetchContactHero();
  return (
    <>
      <Helmet>
        <title>HG Agency - Contact Us</title>
        <meta name='description' content='Hg Agency Marketing Group' />
        <link rel='canonical' href='/contact' />
      </Helmet>
      <Navbar />
      <PageBanner
        title={data?.title}
        breadcrumbs={breadcrumbs}
        image={data?.img}
      />
      <ContactInfo />
      <GoogleMap />
    </>
  );
};

export default Contact;
