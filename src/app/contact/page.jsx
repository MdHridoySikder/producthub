"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields! ⚠️");
      return;
    }

    toast.success("Your message has been sent! ✅");

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            We'd love to hear from you! Questions, feedback, or collaborations –
            we're here to assist.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 md:p-16 border border-gray-200">
          <form onSubmit={handleSubmit} className="grid gap-8">
            <div className="relative">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="peer  w-full border border-gray-300 rounded-2xl p-7 focus:outline-none focus:ring-2 focus:ring-primary transition shadow-sm hover:shadow-md"
              />
              <label
                htmlFor="name"
                className="absolute left-5 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-gray-700 peer-focus:text-sm"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-2xl p-7 focus:outline-none focus:ring-2 focus:ring-primary transition shadow-sm hover:shadow-md"
              />
              <label
                htmlFor="email"
                className="absolute left-5 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-gray-700 peer-focus:text-sm"
              >
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-2xl p-7 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none shadow-sm hover:shadow-md"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-5 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-gray-700 peer-focus:text-sm"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="bg-primary text-white rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center text-gray-700">
          <div className="flex flex-col items-center gap-2">
            <Mail className="w-8 h-8 text-primary" />
            <p>Email</p>
            <p className="font-semibold">support@perfumehub.com</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Phone className="w-8 h-8 text-primary" />
            <p>Phone</p>
            <p className="font-semibold">+880 1234 567890</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin className="w-8 h-8 text-primary" />
            <p>Address</p>
            <p className="font-semibold">, Chattogram, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
