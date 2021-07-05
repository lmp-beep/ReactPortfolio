import React, { useState } from 'react';

import NavTabs from './NavTabs';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import PortfolioVA from './pages/portfolioVA';
import PortfolioNewsFlash from './pages/portfolioNewsFlash';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('home');

  
  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    }
    if (currentPage === 'about') {
      return <About />;
    }
    // if (currentPage === 'portfolioVA') {
    //   return <PortfolioVA />;
    // }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
