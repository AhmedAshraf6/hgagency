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
      <PageBanner
        title='Contact'
        breadcrumbs={breadcrumbs}
        image='https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg'
      />
      <ContactInfo />
      <GoogleMap />
    </>
  );
};

export default Contact;
