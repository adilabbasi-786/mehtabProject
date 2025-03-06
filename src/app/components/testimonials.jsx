"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="w-full px-4 py-12 md:py-16 lg:py-20 ">
      <div className="container mx-auto">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
                <div className="p-6 md:p-4 flex flex-col justify-center h-[400px] md:h-[700px]">
                  <blockquote className="text-lg mb-1">
                    {testimonials[currentIndex].quote}
                  </blockquote>
                  <div className="mt-auto">
                    <h3 className="text-xl font-semibold text-primary">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                  />
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
