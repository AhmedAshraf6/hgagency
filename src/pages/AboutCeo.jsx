import React from 'react';
import {
  Ceo,
  Counter,
  Navbar,
  PageBanner,
  ProjressSection2,
} from '../components';
import NeedHelp from '../components/NeedHelp';
import { useFetchAboutCeoHero } from '../components/Api/fetchAboutCeo';
import { Helmet } from 'react-helmet-async';

const AboutCeo = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'About Ceo', active: true },
  ];
  const { data } = useFetchAboutCeoHero();
  return (
    <>
      <Helmet>
        <title>HG Agency - About Ceo</title>
        <meta name='description' content='Hg Agency Marketing Group' />
        <link rel='canonical' href='/aboutceo' />
      </Helmet>
      <Navbar />
      <PageBanner
        title={data?.title}
        breadcrumbs={breadcrumbs}
        image={data?.img}
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
