"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const ContactPage = () => {
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
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields! ⚠️");
      return;
    }
    toast.success("Your message has been sent! ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
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
        <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 md:p-16 border border-white/20 hover:shadow-3xl transition-all duration-500 relative">
          {/* Floating Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 rounded-3xl blur-3xl opacity-0 hover:opacity-30 transition-opacity duration-500"></div>

          <form onSubmit={handleSubmit} className="grid gap-8 relative z-10">
            {["name", "email"].map((field) => (
              <div key={field} className="relative">
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-3xl p-6 outline-none focus:ring-2 focus:ring-clip focus:ring-gradient-from transition shadow-sm hover:shadow-md bg-white/60 backdrop-blur-sm"
                />
                <label
                  htmlFor={field}
                  className="absolute left-6 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-teal-500 font-medium"
                >
                  {field === "name" ? "Your Name" : "Your Email"}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-3xl p-6 outline-none focus:ring-2 focus:ring-clip focus:ring-gradient-from transition shadow-sm hover:shadow-md resize-none bg-white/60 backdrop-blur-sm"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-6 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-sm peer-focus:text-teal-500 font-medium"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-500 text-white rounded-full px-10 py-3 text-lg font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition transform duration-300 animate-bounce-on-hover"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center text-gray-700">
          {[
            {
              icon: <Mail className="w-8 h-8 text-primary" />,
              title: "Email",
              value: "support@perfumehub.com",
            },
            {
              icon: <Phone className="w-8 h-8 text-primary" />,
              title: "Phone",
              value: "+880 1234 567890",
            },
            {
              icon: <MapPin className="w-8 h-8 text-primary" />,
              title: "Address",
              value: "Chattogram, Bangladesh",
            },
          ].map((info, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 p-6 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer group"
            >
              {info.icon}
              <p className="font-medium">{info.title}</p>
              <p className="font-semibold">{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
