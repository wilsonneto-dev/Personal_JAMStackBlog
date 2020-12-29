import React from 'react';
import Header from 'ui/layout/Header';
import Footer from 'ui/layout/Footer';
import Advertisement from 'ui/layout/Advertisement';

const Default: React.FC = ({ children }) => (
  <>
    <Header />
    <Advertisement />
    {children}
    <Footer />
  </>
);

export default Default;
