import BannerSection from "@/app/components/banner";
import Expertise from "@/app/components/expertise";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import { TestimonialSlider } from "@/app/components/testimonials";
import TopHeader from "@/app/components/top-header";
import HomeBlogs from "@/app/components/home-blogs";
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <TopHeader />
      <Header />
      <Hero />
      <Expertise />
      {/* <TestimonialSlider /> */}
      <HomeBlogs />
      <BannerSection />
      <Footer />
    </main>
  );
};

export default HomePage;
