import React from 'react';
import Header from 'shared/layout/Header';
import Footer from 'shared/layout/Footer';
import Advertisement from 'shared/layout/Advertisement';

const Default: React.FC = ({ children }) => (
  <>
    <Header />
    <Advertisement />
    {children}
    <Footer />
  </>
);

export default Default;
