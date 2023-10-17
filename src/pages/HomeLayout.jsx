import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Navbar } from '../components';
const HomeLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <section>
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default HomeLayout;
