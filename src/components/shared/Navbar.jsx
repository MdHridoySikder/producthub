// Add this line at the very top
"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  // For demo, let's assume user is logged in
  const [user, setUser] = useState({
    name: "Hridoy",
    loggedIn: true,
  });

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 border-b border-gray-200 shadow-md transition-all duration-300">
      <div className="navbar px-6 py-3 max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT */}
        <div className="navbar-start flex items-center gap-4">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              className="btn btn-ghost p-2 hover:bg-gray-100 rounded-full transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-md rounded-xl mt-3 w-52 p-3 shadow-xl flex flex-col gap-2 animate-fade-in"
            >
              <Link
                href={"/"}
                className="hover:text-teal-500 transition-colors"
              >
                Home
              </Link>
              <div className="flex flex-col gap-1 ml-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Products
                </span>
                <Link
                  href={"/products"}
                  className="hover:text-teal-500 transition-colors"
                >
                  All Products
                </Link>
                <Link
                  href={"/addProduct"}
                  className="hover:text-teal-500 transition-colors"
                >
                  Add Product
                </Link>
                <Link
                  href={"/manageProducts"}
                  className="hover:text-teal-500 transition-colors"
                >
                  Manage Products
                </Link>
              </div>
              <Link
                href={"/features"}
                className="hover:text-teal-500 transition-colors"
              >
                Features
              </Link>
              <Link
                href={"/testimonials"}
                className="hover:text-teal-500 transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href={"/contact"}
                className="hover:text-teal-500 transition-colors"
              >
                Contact
              </Link>
            </ul>
          </div>

          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/cr.png"
              alt="PerfumeHub Logo"
              width={44}
              height={44}
              className="rounded-full border border-primary p-1 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 transition-all group-hover:from-cyan-500 group-hover:to-teal-400">
              PerfumeHub
            </span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium gap-6">
            {["Home", "Features", "Testimonials", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group px-2 py-1 transition-colors hover:text-teal-500"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full rounded"></span>
              </Link>
            ))}
            {/* Products Dropdown */}
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                className="relative group px-2 py-1 transition-colors hover:text-teal-500 cursor-pointer flex items-center gap-1"
              >
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full rounded"></span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow-xl bg-white rounded-box w-52 border border-gray-100 animate-fade-in"
              >
                <li>
                  <Link href="/products" className="hover:text-teal-500">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/addProduct" className="hover:text-teal-500">
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link href="/manageProducts" className="hover:text-teal-500">
                    Manage Products
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex gap-3">
          {user.loggedIn ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="btn btn-ghost rounded-full px-4 flex items-center gap-2"
              >
                {user.name} ▼
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-white rounded-box w-52 p-2 shadow-xl flex flex-col gap-2"
              >
                <li>
                  <Link href="/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link href="/manageProducts">Manage Products</Link>
                </li>
                <li>
                  <button
                    onClick={() => setUser({ loggedIn: false })}
                    className="text-left w-full"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="btn btn-ghost rounded-full px-6 hover:bg-gray-100 hover:text-teal-500 transition font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="btn bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full px-6 shadow-md hover:shadow-lg hover:from-teal-500 hover:to-cyan-600 transition transform hover:-translate-y-0.5 text-white font-semibold"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
