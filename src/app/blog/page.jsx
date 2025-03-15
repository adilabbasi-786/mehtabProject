import React from "react";
import TopHeader from "../components/top-header";
import Header from "../components/header";
import Hero from "../components/hero";
import BlogsPage from "./component/blog";
import Footer from "../components/footer";

const page = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Hero />
      <BlogsPage />
      <Footer />
    </>
  );
};

export default page;
