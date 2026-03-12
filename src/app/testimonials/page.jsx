"use client";

import React from "react";
import { Users, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    feedback:
      "Absolutely love the Blue Elegance perfume! It lasts all day and smells amazing.",
    rating: 5,
  },
  {
    name: "Michael Smith",
    feedback:
      "CK Classic is my go-to scent. The delivery was super fast and packaging is top-notch.",
    rating: 4,
  },
  {
    name: "Emma Williams",
    feedback:
      "Dior Essence is luxurious and elegant. Highly recommend PerfumeHub for genuine products.",
    rating: 5,
  },
  {
    name: "David Brown",
    feedback:
      "Excellent service and authentic perfumes. I keep coming back for more!",
    rating: 5,
  },
];

const Testimonialspage = () => {
  return (
    <section className="py-20 mt-5 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
          Hear from Our Customers
        </h2>
        <p className="text-gray-600 mb-16 text-lg md:text-xl">
          Genuine reviews from perfume lovers worldwide.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-2xl p-8 hover:scale-105 hover:shadow-3xl transition-transform duration-500 cursor-pointer group overflow-hidden border-2 border-transparent hover:border-gradient-to-r hover:from-teal-400 hover:to-cyan-500"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-pink-300 to-yellow-200 opacity-0 group-hover:opacity-25 rounded-3xl blur-3xl transition-opacity duration-500"></div>

              <div className="relative flex flex-col items-center gap-3">
                {/* Circular Avatar */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-teal-400 flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-gray-600 text-center mb-4">{t.feedback}</p>

                {/* Floating Stars */}
                <div className="flex gap-1 animate-[float_3s_ease-in-out_infinite]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonialspage;
