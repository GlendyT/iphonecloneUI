import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import Howitworks from "./components/Howitworks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Howitworks/>
      <Footer/>
    </main>
  );
};

export default Sentry.withProfiler(App);


