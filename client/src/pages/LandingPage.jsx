import React, {useState} from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Landing from '../components/landing/Landing';
import { useAuth } from '../components/auth/AuthContext';


const LandingPage = () => {
  const authContext = useAuth();
  const { isAuthenticated } = authContext;
  return (
    <div>
      <Header hasBackgroundImage={false} isAuthenticated={isAuthenticated} />
      <Landing />
      <Footer />
    </div>
  );
};

export default LandingPage;