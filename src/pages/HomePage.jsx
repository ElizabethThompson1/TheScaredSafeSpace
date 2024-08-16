import React from 'react';
import Header from '../components/Home/Header/Header';
import Mission from '../components/Home/Mission/Mission';
import Resources from '../components/Home/Resources/Resources';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import Events from '../components/Home/Events/Events';

const HomePage = () => {
  return (
    <>
      <Header/>
      <Mission/>
      <Resources/>
      <Testimonials/>
      <Events/>
    </>
  );
}

export default HomePage;
