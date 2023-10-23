import React from 'react';
import {
  Navbar,
  PageBanner,
  SingleProductSlider,
  SingleProjectContent,
} from '../components';
import { useParams } from 'react-router-dom';

const SingleProject = () => {
  const breadcrumbs = [
    { link: '/', word: 'Home' },
    { word: 'Single Project', active: true },
  ];
  const { projectid } = useParams();
  return (
    <>
      <Navbar />
      <PageBanner title='Single Project' breadcrumbs={breadcrumbs} />
      <SingleProductSlider />
      <SingleProjectContent />
    </>
  );
};

export default SingleProject;
