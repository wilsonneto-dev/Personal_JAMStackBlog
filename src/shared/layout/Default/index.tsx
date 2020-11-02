import React from 'react';
import Header from 'shared/layout/Header';
import Footer from 'shared/layout/Footer';

const Default: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Default;
