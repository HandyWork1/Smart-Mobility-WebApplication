import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Landing from '../components/landing/Landing';

const LandingPage = () => {
  return (
    <div>
      <Header hasBackgroundImage={false} isAuthenticated={false} />
      <Landing />
      <Footer />
    </div>
  );
};

export default LandingPage;