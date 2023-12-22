import React from 'react';
import { AllProjects, ContactInfo, Navbar, PageBanner } from '../components';
import GoogleMap from '../components/GoogleMap';
import { useFetchContactHero } from '../components/Api/fetchContact';

const Contact = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Contact Us', active: true },
  ];
  const { data } = useFetchContactHero();
  return (
    <>
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
