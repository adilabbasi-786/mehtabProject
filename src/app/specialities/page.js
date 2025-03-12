import React from "react";
import TopHeader from "../components/top-header";
import Header from "../components/header";
import Hero from "../components/hero";
import CompanySpecialties from "./components/SpecialityCard";
import Footer from "../components/footer";

const Specialities = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      <CompanySpecialties />
      <Footer />
    </div>
  );
};

export default Specialities;
