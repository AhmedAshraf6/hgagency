import React from 'react';
import {
  Ceo,
  Counter,
  Navbar,
  PageBanner,
  ProjressSection2,
} from '../components';
import NeedHelp from '../components/NeedHelp';

const AboutCeo = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'About Ceo', active: true },
  ];
  return (
    <>
      <Navbar />
      <PageBanner
        title='About Us'
        breadcrumbs={breadcrumbs}
        image='https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg'
      />
      <Ceo />
      {/* <ProjressSection2 /> */}
      <div className='align-element my-6 sm:my-12'>
        <div className='divider h-[1px] bg-gray-500'></div>
      </div>
      <Counter />
      <NeedHelp />
    </>
  );
};

export default AboutCeo;
