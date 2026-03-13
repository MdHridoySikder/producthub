"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, Suspense } from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

// Separated component to handle useSearchParams safely within Suspense
const NavigationLoader = ({ setIsNavigating }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsNavigating(true);
    const timeout = setTimeout(() => setIsNavigating(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams, setIsNavigating]);

  return null;
};

const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  // Nav items list
  const navItems = ["Home", "Features", "Testimonials", "Contact", "Blogs"];

  const closeDropdown = () => {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/60 border-b border-gray-200 shadow-sm transition-all duration-300">
      {/* SearchParams hook usage wrapped in Suspense */}
      <Suspense fallback={null}>
        <NavigationLoader setIsNavigating={setIsNavigating} />
      </Suspense>

      {isNavigating && (
        <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden bg-transparent">
          <div className="h-full bg-teal-500 animate-loading-bar shadow-[0_0_10px_#14b8a6]"></div>
        </div>
      )}

      <div className="navbar px-6 py-3 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Mobile Toggle */}
        <div className="navbar-start flex items-center gap-4">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
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
              className="menu menu-sm dropdown-content bg-white rounded-xl mt-3 w-52 p-3 shadow-xl flex flex-col gap-2 border border-gray-100 z-[100]"
            >
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={closeDropdown}
                    className={`hover:text-teal-500 transition-colors block py-2 ${
                      pathname ===
                      (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                        ? "text-teal-500 font-bold"
                        : "text-gray-600"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <div className="flex flex-col gap-1 ml-2 border-l-2 border-teal-100 pl-3 my-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Products
                </span>
                <li>
                  <Link
                    href="/products"
                    onClick={closeDropdown}
                    className="text-sm hover:text-teal-500 py-2"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/addProduct"
                    onClick={closeDropdown}
                    className="text-sm hover:text-teal-500 py-2"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/manageProducts"
                    onClick={closeDropdown}
                    className="text-sm hover:text-teal-500 py-2"
                  >
                    Manage Perfumes
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
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
          <ul className="menu menu-horizontal px-1 text-base font-semibold gap-6 items-center">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`relative group px-1 py-1 transition-colors hover:text-teal-600 ${
                    pathname ===
                    (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                      ? "text-teal-500"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all rounded-full ${
                      pathname ===
                      (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}

            {/* Products Dropdown - Click to Open Only */}
            <li className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="relative group px-1 py-1 transition-colors hover:text-teal-600 cursor-pointer flex items-center gap-1 text-gray-700"
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
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[100] menu p-2 shadow-2xl bg-white rounded-2xl w-56 border border-gray-100 mt-2 flex flex-col gap-1"
              >
                <li className="menu-title px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 mb-1">
                  Management
                </li>
                <li>
                  <Link
                    href="/products"
                    onClick={closeDropdown}
                    className="hover:bg-teal-50 rounded-xl p-3"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/addProduct"
                    onClick={closeDropdown}
                    className="hover:bg-teal-50 rounded-xl p-3"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/manageProducts"
                    onClick={closeDropdown}
                    className="hover:bg-teal-50 rounded-xl p-3"
                  >
                    Manage Perfumes
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* RIGHT: Profile/Auth */}
        <div className="navbar-end flex gap-3 items-center">
          {status === "authenticated" ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
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
                <div className="relative w-9 h-9 rounded-xl overflow-hidden border-2 border-teal-400 shadow-md transform transition-transform hover:scale-105 active:scale-95">
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
                className="menu dropdown-content bg-white rounded-2xl w-64 p-3 mt-4 shadow-2xl flex flex-col gap-1 border border-gray-100 z-[100]"
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
                    onClick={closeDropdown}
                    className="p-3 hover:bg-teal-50 rounded-xl font-bold text-gray-700"
                  >
                    Account Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      signOut();
                      closeDropdown();
                    }}
                    className="p-3 hover:bg-red-50 text-red-500 rounded-xl font-bold w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="btn btn-ghost rounded-xl px-4 font-bold text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all hidden sm:flex"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="btn bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-none rounded-xl px-4 sm:px-6 shadow-lg shadow-teal-500/20 font-bold"
              >
                Join
              </Link>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-loading-bar {
          animation: loading-bar 1s infinite linear;
          width: 50%;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
