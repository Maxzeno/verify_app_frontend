// Home.js

import React from "react";
import CallToAction from "../../components/CallToAction.jsx";
import Features from "../../components/Features.jsx";
import Footer from "../../components/Footer.jsx";
import Hero from "../../components/Hero.jsx";
import Navbar from "../../components/Navbar.jsx";
import Testimonial from "../../components/Testimonial.jsx";

const Services = () => {
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

export default Services;
