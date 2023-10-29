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
import { useFetchHeroSection } from '../components/Api/fetchHomePage';
const HomeLayout = () => {
  const { isLoading } = useFetchHeroSection();
  if (isLoading) {
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
