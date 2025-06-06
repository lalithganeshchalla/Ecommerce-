import React from 'react';
import { Outlet } from 'react-router-dom';
import Aside_menu from '../components/Aside_menu';
import ResponsiveAppBar_Home from '../components/ResponsiveAppBar_Home';
import Footer from '../components/Footer';

const Layout_structure = () => {
  return (
    <>
      <ResponsiveAppBar_Home /> {/* Header component */}
      <div style={{ display: 'flex' }}>
        <Aside_menu />
        <main style={{ flexGrow: 1, padding: '20px' }}>
          <Outlet />
        </main>
      </div>
       <Footer/>
    </>
  );
};

export default Layout_structure;
