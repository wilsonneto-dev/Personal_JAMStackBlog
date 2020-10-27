import React from 'react';
import Header from 'shared/layout/Header';

const Default: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Default;
