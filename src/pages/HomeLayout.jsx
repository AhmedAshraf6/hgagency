import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Footer,
  Header,
  Navbar,
  ScrollToTopButton,
  TopHeaderEffect,
} from '../components';
const HomeLayout = () => {
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
