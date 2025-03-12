import TopHeader from "@/app/components/top-header";
import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Experience from "./components/Experience";
import WhyChooseUs from "./components/WhyChooseUs";

const Aboutus = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      <Experience />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Aboutus;
