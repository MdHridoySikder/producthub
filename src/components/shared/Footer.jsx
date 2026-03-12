"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600 transition-all group-hover:from-cyan-600 group-hover:to-teal-500">
                PerfumeHub
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Discover your signature scent with PerfumeHub. We offer the finest
              collection of premium fragrances for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "Products", "Blogs", "Features", "Testimonials"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-500 hover:text-teal-500 text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-gray-500 text-sm">
                Email: support@perfumehub.com
              </li>
              <li className="text-gray-500 text-sm">Phone: +1 (234) 567-890</li>
              <li className="text-gray-500 text-sm">
                Address: 123 Fragrance Lane, Scent City
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6">Newsletter</h3>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-white border-gray-200 focus:border-teal-500 text-sm"
              />
              <button className="btn bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-none shadow-md shadow-teal-500/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} PerfumeHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-teal-500 text-xs transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
