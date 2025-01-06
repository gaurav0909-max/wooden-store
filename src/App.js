import React from "react";
import Navbar from "./Layout/Navbar";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Pricing from "./Components/Pricing";
import FAQ from "./Components/FAQ";
import Testimonials from "./Components/Testimonials";
import Footer from "./Layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <Pricing />
          <FAQ />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
