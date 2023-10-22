import React from 'react';
import {
  Counter,
  Navbar,
  PageBanner,
  ProjressSection2,
  WhyChooseUs,
} from '../components';
import NeedHelp from '../components/NeedHelp';

const AboutUs = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'About Us', active: true },
  ];
  return (
    <>
      <Navbar />
      <PageBanner title='About Us' breadcrumbs={breadcrumbs} />
      <ProjressSection2 />
      <div className='align-element my-6 sm:my-12'>
        <div className='divider h-[1px] bg-gray-500'></div>
      </div>
      <Counter />
      <NeedHelp />
      <WhyChooseUs />
    </>
  );
};

export default AboutUs;
