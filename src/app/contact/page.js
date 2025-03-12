import React from "react";
import TopHeader from "../components/top-header";
import Header from "../components/header";
import Hero from "../components/hero";
import ContactPage from "./components/Contactus";
import Footer from "../components/footer";

const page = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default page;
