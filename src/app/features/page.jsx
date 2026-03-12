"use client";

import React from "react";
import { Star, Truck, CheckCircle, Gift } from "lucide-react"; // icons

const features = [
  {
    title: "Premium Quality",
    desc: "Only the finest perfumes sourced from top brands around the world.",
    icon: <Star className="w-10 h-10 text-white" />,
  },
  {
    title: "Fast Delivery",
    desc: "Get your favorite scents delivered to your doorstep quickly and safely.",
    icon: <Truck className="w-10 h-10 text-white" />,
  },
  {
    title: "Authenticity Guaranteed",
    desc: "All our products are 100% genuine and original, no compromises.",
    icon: <CheckCircle className="w-10 h-10 text-white" />,
  },
  {
    title: "Exclusive Collections",
    desc: "Discover limited edition perfumes and exclusive collections every season.",
    icon: <Gift className="w-10 h-10 text-white" />,
  },
];

const Featurespage = () => {
  return (
    <section className="py-20 mt-5 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Features</h2>
        <p className="text-gray-600 mb-12">
          Discover why PerfumeHub is the best choice for luxury perfumes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-lg p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer group overflow-hidden"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 via-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-3xl blur-3xl transition-opacity duration-500"></div>

              <div className="relative flex flex-col items-center">
                {/* Icon with gradient circle */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-gradient-to-tr from-teal-400 via-cyan-400 to-purple-500 shadow-lg transform transition group-hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-800 relative group">
                  {feature.title}
                  {/* Animated underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:w-full transition-all duration-500 rounded"></span>
                </h3>
                <p className="text-gray-600 text-center">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featurespage;
