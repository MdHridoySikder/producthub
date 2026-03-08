"use client";

import React from "react";
import { Star, Truck, CheckCircle, Gift } from "lucide-react"; // icons

const features = [
  {
    title: "Premium Quality",
    desc: "Only the finest perfumes sourced from top brands around the world.",
    icon: <Star className="w-10 h-10 text-primary mb-4" />,
  },
  {
    title: "Fast Delivery",
    desc: "Get your favorite scents delivered to your doorstep quickly and safely.",
    icon: <Truck className="w-10 h-10 text-primary mb-4" />,
  },
  {
    title: "Authenticity Guaranteed",
    desc: "All our products are 100% genuine and original, no compromises.",
    icon: <CheckCircle className="w-10 h-10 text-primary mb-4" />,
  },
  {
    title: "Exclusive Collections",
    desc: "Discover limited edition perfumes and exclusive collections every season.",
    icon: <Gift className="w-10 h-10 text-primary mb-4" />,
  },
];

const Featurespage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Features</h2>
        <p className="text-gray-600 mb-12">
          Discover why PerfumeHub is the best choice for luxury perfumes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
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
