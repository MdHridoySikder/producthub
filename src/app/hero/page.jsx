"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSession } from "next-auth/react";

const HeroPage = () => {
  const { status } = useSession();
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
    <section className="relative  w-full h-[80vh] overflow-hidden flex items-center justify-center">
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
            className="btn bg-gradient-to-r from-teal-500 to-cyan-600 text-white border-none rounded-full px-10 py-4 text-lg font-black shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-teal-500/30"
          >
            Explore Collection
          </Link>
          {status === "unauthenticated" && (
            <>
              <Link
                href="/login"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-teal-600 rounded-full px-10 py-4 text-lg font-black shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                Sign In
              </Link>
            </>
          )}
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
