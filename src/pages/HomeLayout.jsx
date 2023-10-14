import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';
const HomeLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;