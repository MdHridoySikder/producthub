"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroPage = () => {
  // Slides: image + title + description
  const slides = [
    {
      img: "/blue.png",
      title: "Blue De Chance",
      desc: "Fresh and elegant fragrance with citrus and woody notes.",
    },
    {
      img: "/ck.png",
      title: "CK Be",
      desc: "Clean and modern scent perfect for everyday wear.",
    },
    {
      img: "/dior.png",
      title: "Dior Sauvage",
      desc: "Bold masculine fragrance with spicy and fresh notes",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  return (
    <section className="relative mt-19 w-full h-[80vh] overflow-hidden flex items-center justify-center">
      {/* Slide Image */}
      <Image
        src={slides[current].img}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover transition-transform duration-700"
        width={1920}
        height={1080}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {slides[current].title}
        </h1>
        <p className="text-white/90 mb-6 text-lg md:text-xl">
          {slides[current].desc}
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/products"
            className="btn btn-primary rounded-full px-6 py-2 text-lg shadow-lg hover:scale-105 transition"
          >
            Explore Products
          </Link>
          <Link
            href="/login"
            className="btn btn-outline btn-white rounded-full px-6 py-2 text-lg shadow hover:scale-105 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="btn btn-outline btn-white rounded-full px-6 py-2 text-lg shadow hover:scale-105 transition"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroPage;
