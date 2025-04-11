import TopHeader from "@/app/components/top-header";
import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import PrivacyPolicy from "./components/Privacy-policy";

const Policy = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default Policy;
