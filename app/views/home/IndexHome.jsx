import React from 'react';
import Navbar from '../../components/common/Navbar';
import Home from '../../components/sections/home/Home';

const IndexHome = () => (
  <main className="wrapper">
    <Navbar
      header
    />
    <Home />
  </main>
);

export default IndexHome;
