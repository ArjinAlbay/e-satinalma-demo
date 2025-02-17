"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Satın alma yöneticilerine stratejik avantajlar sunar!",
      description:
        "e-Satinalma.Net, tedarik sistemi yazılımlarındaki zayıflıkların neden olduğu dezavantajları ve tedarik zinciri krizlerini aşma fırsatıdır.",
      buttonText: "Üye ol",
      image: "/images/slide1.png",
    },
    {
      title: "Dijital satınalma platformu",
      description:
        "Modern ve kullanıcı dostu arayüz ile tedarik süreçlerinizi yönetin",
      buttonText: "Keşfet",
      image: "/images/slide2.png",
    },
    {
      title: "Tedarik zinciri yönetimi",
      description:
        "Kapsamlı raporlama ve analiz araçları ile veriye dayalı kararlar alın",
      buttonText: "Demo İste",
      image: "/images/slide3.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden mt-16">
      <div
        className="relative w-full h-full"
        style={{
          backgroundColor: "#1e2a4a",
          backgroundImage:
            "linear-gradient(rgba(30, 42, 74, 0.8), rgba(30, 42, 74, 0.8))",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out 
            ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>

            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-full">
                <div className="w-full md:w-1/2 text-white space-y-6 py-12">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-200">{slide.description}</p>
                  <div className="flex space-x-4 pt-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200">
                      {slide.buttonText}
                    </button>
                    <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200">
                      İzle
                    </button>
                  </div>
                </div>

                <div className="hidden md:block w-1/2 h-[600px] relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-3xl overflow-hidden backdrop-blur-md shadow-lg border border-white/10">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 
              ${
                currentSlide === index
                  ? "bg-blue-600"
                  : "bg-white/50 hover:bg-white/75"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
