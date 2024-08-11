import React from 'react';
import Header from '../components/Header/Header';
import Mission from '../components/Mission/Mission';
import Resources from '../components/Resources/Resources';
import Testimonials from '../components/Testimonials/Testimonials';

const HomePage = () => {
  return (
    <>
      <Header/>
      <Mission/>
      <Resources/>
      <Testimonials/>
    </>
  );
}

export default HomePage;
