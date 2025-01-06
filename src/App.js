import React, { useEffect } from "react";
import Navbar from "./Layout/Navbar";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Pricing from "./Components/Pricing";
import FAQ from "./Components/FAQ";
import Testimonials from "./Components/Testimonials";
import Footer from "./Layout/Footer";
import { gsap } from "gsap";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 rounded-lg py-1">
        <Navbar />
        <Hero />
        <Products />
        <Pricing />
        <FAQ />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default App;
