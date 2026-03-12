import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-4 gap-10">
        {/* Logo & Brand */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center gap-3 mb-4 group">
            <Image
              src="/cr.png"
              alt="PerfumeHub Logo"
              width={50}
              height={50}
              className="rounded-full border border-primary p-1 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
            />
            <span className="text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:from-cyan-500 group-hover:to-teal-400 transition-all">
              PerfumeHub
            </span>
          </Link>
          <p className="text-sm text-gray-600">
            Luxury perfumes delivered to your doorstep. Experience elegance in
            every scent.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            {["Home", "Products", "Features", "Testimonials", "Contact"].map(
              (item) => (
                <li key={item} className="relative group">
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-teal-500 transition-colors"
                  >
                    {item}
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full rounded"></span>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
          <ul className="space-y-2 text-gray-700">
            {["Help Center", "Shipping", "Returns", "FAQs"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  href="/"
                  className="hover:text-teal-500 transition-colors"
                >
                  {item}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full rounded"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Contact</h3>
          <p className="text-gray-700 mb-2">Email: support@perfumehub.com</p>
          <p className="text-gray-700 mb-2">Phone: +880 1234 567890</p>
          <div className="flex gap-3 mt-3">
            {[Facebook, Twitter, Instagram].map((Icon, idx) => (
              <Link
                key={idx}
                href="/"
                className="btn btn-ghost btn-sm rounded-full p-2 shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-110"
              >
                <Icon className="w-5 h-5 text-gray-700 hover:text-teal-500 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-10 text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} PerfumeHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
