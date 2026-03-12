"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 border-b border-gray-200 shadow-md transition-all duration-300">
      <div className="navbar px-6 py-3 max-w-7xl mx-auto flex items-center justify-between">
        {/* LEFT: Logo & Mobile Toggle */}
        <div className="navbar-start flex items-center gap-4">
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
              className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-md rounded-xl mt-3 w-52 p-3 shadow-xl flex flex-col gap-2 animate-fade-in border border-gray-100"
            >
              <Link
                href={"/"}
                className="hover:text-teal-500 transition-colors"
              >
                Home
              </Link>
              <div className="flex flex-col gap-1 ml-2 border-l-2 border-teal-100 pl-3 my-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Products
                </span>
                <Link
                  href={"/products"}
                  className="text-sm hover:text-teal-500 transition-colors"
                >
                  All Products
                </Link>
                <Link
                  href={"/addProduct"}
                  className="text-sm hover:text-teal-500 transition-colors"
                >
                  Add Product
                </Link>
                <Link
                  href={"/manageProducts"}
                  className="text-sm hover:text-teal-500 transition-colors"
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

          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11">
              <Image
                src="/cr.png"
                alt="PerfumeHub Logo"
                fill
                className="rounded-full border border-teal-100 p-1 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 object-contain"
              />
            </div>
            <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600 transition-all group-hover:from-cyan-600 group-hover:to-teal-500 hidden sm:block">
              PerfumeHub
            </span>
          </Link>
        </div>

        {/* CENTER: Desktop Nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-semibold gap-8">
            {["Home", "Features", "Testimonials", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group px-1 py-1 transition-colors hover:text-teal-600"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all group-hover:w-full rounded-full"></span>
              </Link>
            ))}
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                className="relative group px-1 py-1 transition-colors hover:text-teal-600 cursor-pointer flex items-center gap-1"
              >
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 opacity-70"
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
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all group-hover:w-full rounded-full"></span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[2] menu p-2 shadow-2xl bg-white/95 backdrop-blur-md rounded-2xl w-56 border border-gray-100 animate-fade-in mt-2 flex flex-col gap-1"
              >
                <li className="menu-title px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-1">
                  Stock Portfolio
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:bg-teal-50 rounded-xl p-3 flex items-center gap-3 group/item transition-all"
                  >
                    <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                      ✨
                    </span>{" "}
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/addProduct"
                    className="hover:bg-teal-50 rounded-xl p-3 flex items-center gap-3 group/item transition-all"
                  >
                    <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                      ➕
                    </span>{" "}
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/manageProducts"
                    className="hover:bg-teal-50 rounded-xl p-3 flex items-center gap-3 group/item transition-all"
                  >
                    <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                      🛠️
                    </span>{" "}
                    Manage Inventory
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>

        {/* RIGHT: Profile/Auth */}
        <div className="navbar-end flex gap-4">
          {status === "authenticated" ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="btn btn-ghost rounded-2xl px-2 py-1 flex items-center gap-3 hover:bg-teal-50 transition-all border border-gray-100/50 shadow-sm"
              >
                <div className="hidden md:flex flex-col items-end leading-none">
                  <span className="text-sm font-bold text-gray-900">
                    {session.user.name}
                  </span>
                  <span className="text-[10px] text-teal-500 font-bold uppercase tracking-tighter">
                    Premium
                  </span>
                </div>
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-teal-400 shadow-md transform transition-transform hover:scale-105 active:scale-95">
                  <Image
                    src={session.user.image || "/blue.png"}
                    alt={session.user.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-white/95 backdrop-blur-xl rounded-2xl w-64 p-3 mt-4 shadow-2xl flex flex-col gap-1 animate-fade-in border border-gray-100 z-50 overflow-hidden"
              >
                <div className="px-4 py-3 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl mb-2 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src={session.user.image || "/blue.png"}
                      alt={session.user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <p className="text-sm font-bold text-gray-900 truncate">
                      {session.user.name}
                    </p>
                    <p className="text-[11px] text-gray-500 truncate">
                      {session.user.email}
                    </p>
                  </div>
                </div>
                <li>
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 p-3 hover:bg-teal-50 rounded-xl transition-all group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                      👤
                    </span>
                    <span className="font-bold text-gray-700">
                      Account Profile
                    </span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="flex items-center gap-3 p-3 hover:bg-red-50 text-red-500 rounded-xl transition-all group w-full text-left"
                  >
                    <span className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      🚪
                    </span>
                    <span className="font-bold">Logout Session</span>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="btn btn-ghost rounded-xl px-6 font-bold text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="btn bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-xl px-7 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all border-none font-bold"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
