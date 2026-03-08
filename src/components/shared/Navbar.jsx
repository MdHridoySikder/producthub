import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className=" top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-base-200 shadow-md transition-all duration-300">
      <div className="navbar px-6 py-3">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content bg-white/90 backdrop-blur-sm rounded-xl mt-3 w-52 p-2 shadow-lg"
            >
              <Link href={"/"}>Home</Link>
              <Link href={"/products"}>Products</Link>
              <Link href={"/features"}>Features</Link>

              <Link href={"/testimonials"}>Testimonials</Link>
              <Link href={"/contact"}>Contact</Link>
            </ul>
          </div>

          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 ml-2 group">
            <Image
              src="/cdnim.png"
              alt="PerfumeHub Logo"
              width={44}
              height={44}
              className="rounded-full border border-primary p-1 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-bold tracking-wide group-hover:text-primary transition-colors">
              PerfumeHub
            </span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium gap-4">
            <Link href={"/"}>Home</Link>
            <Link href="/products">Products</Link>
            <Link href={"/features"}>Features</Link>
            <Link href={"/testimonials"}>Testimonials</Link>
            <Link href={"/contact"}>Contact</Link>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3">
          <Link
            href="/"
            className="btn btn-ghost rounded-full px-6 hover:bg-base-200 transition"
          >
            Login
          </Link>

          <Link
            href="/"
            className="btn btn-primary rounded-full px-6 shadow-md hover:shadow-lg transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
