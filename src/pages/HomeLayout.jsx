import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Footer,
  Header,
  Loading,
  Navbar,
  ScrollToTopButton,
  TopHeaderEffect,
} from '../components';
import {
  useFetchFeaturedProjects,
  useFetchHeroSection,
  useFetchStatsSlider,
} from '../components/Api/fetchHomePage';
const HomeLayout = () => {
  const { isLoading } = useFetchHeroSection();
  const { isLoadingStatsSlider } = useFetchStatsSlider();
  const { isLoadingFeaturedProjects } = useFetchFeaturedProjects();
  if (isLoading || isLoadingStatsSlider || isLoadingFeaturedProjects) {
    return <Loading />;
  }
  return (
    <>
      {/* <Header /> */}
      <section>
        <Outlet />
        <Footer />
      </section>
      <ScrollToTopButton />
      <TopHeaderEffect />
    </>
  );
};

export default HomeLayout;
