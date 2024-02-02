// Home.js

import React from 'react';
import CallToAction from '../components/CallToAction';
import Features from '../components/Features.jsx';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
