import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout: React.FC = () => {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout;