"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
const testimonials = [
  {
    id: 1,
    name: "Dr. Jasjot Bhullar",
    title: "Nephrology",
    quote:
      "I have been working with Al Berry for several months. He has been efficient and also helped me get my credentialing done smoothly. I recommend him without reservations.",
    image: "/review1.jpg",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    title: "Cardiology",
    quote:
      "The team has been instrumental in streamlining our practice operations. Their attention to detail and prompt service has made a significant difference in our workflow.",
    image: "/review2.jpg",
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    title: "Oncology",
    quote:
      "I've been impressed with the level of professionalism and expertise. They've helped us navigate complex regulatory requirements with ease and confidence.",
    image: "/review3.jpeg",
  },
];

export function TestimonialSlider({ autoSlideInterval = 5000, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, autoSlideInterval]);

  // Pause auto-slide on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  return (
    <div className={`w-full ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Happy Clients
          </h2>
          <p className="text-muted-foreground">
            Serving 100+ providers all across the United States
          </p>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          <div className="overflow-hidden">
            <div className="bg-background rounded-lg shadow-sm border">
              {/* ✅ Adjusted Grid for mobile and desktop */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-0 md:gap-6 items-center">
                {/* ✅ Image Section First for mobile */}
                <div className="relative w-full h-[150px] xs:h-[200px] sm:h-[250px] md:h-[500px] flex items-center justify-center bg-background rounded-l-lg md:rounded-none md:rounded-l-lg">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-contain p-1"
                    priority={currentIndex === 0}
                  />
                </div>

                {/* ✅ Testimonial Text */}
                <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center h-auto md:h-[500px] bg-gray-100 rounded-r-lg md:rounded-none md:rounded-r-lg">
                  <blockquote className="text-xs xs:text-sm sm:text-base md:text-lg mb-2 sm:mb-4">
                    {testimonials[currentIndex].quote}
                  </blockquote>
                  <div className="mt-2 sm:mt-4">
                    <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-primary">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-background transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-background transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
