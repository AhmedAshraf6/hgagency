import React from 'react';
import { AllProjects, ContactInfo, Navbar, PageBanner } from '../components';
import GoogleMap from '../components/GoogleMap';

const Contact = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Contact Us', active: true },
  ];
  return (
    <>
      <Navbar />
      <PageBanner title='Contact' breadcrumbs={breadcrumbs} />
      <ContactInfo />
      <GoogleMap />
    </>
  );
};

export default Contact;
