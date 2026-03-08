import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // <-- lucide icons import

const Footer = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-md border-t border-base-200 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-4 gap-10">
        {/* Logo & Brand */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image
              src="/cdnim.png"
              alt="PerfumeHub Logo"
              width={50}
              height={50}
              className="rounded-full border border-primary p-1"
            />
            <span className="text-2xl font-bold tracking-wide">PerfumeHub</span>
          </Link>
          <p className="text-sm text-gray-600">
            Luxury perfumes delivered to your doorstep. Experience elegance in
            every scent.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary transition">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-700 mb-2">Email: support@perfumehub.com</p>
          <p className="text-gray-700 mb-2">Phone: +880 1234 567890</p>
          <div className="flex gap-3 mt-2">
            <Link href="/" className="btn btn-ghost btn-sm rounded-full p-2">
              <Facebook className="w-4 h-4 text-gray-700 hover:text-primary transition" />
            </Link>
            <Link href="/" className="btn btn-ghost btn-sm rounded-full p-2">
              <Twitter className="w-4 h-4 text-gray-700 hover:text-primary transition" />
            </Link>
            <Link href="/" className="btn btn-ghost btn-sm rounded-full p-2">
              <Instagram className="w-4 h-4 text-gray-700 hover:text-primary transition" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-base-200 mt-10 text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} PerfumeHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
