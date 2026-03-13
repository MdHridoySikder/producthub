"use client";

import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * A client-side wrapper component to protect routes.
 * It redirects unauthenticated users to the login page.
 * It also prevents accidental redirects for already authenticated users.
 */
const AuthWrapper = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Define public pages that do not require authentication.
   * To add a new PROTECTED page, simply DO NOT add its path here.
   * Any path not in this list will automatically be protected.
   */
  const publicPages = ["/", "/login", "/register", "/perfume-avatar"];

  useEffect(() => {
    // Only redirect if the session has finished loading and the user is unauthenticated
    if (status === "unauthenticated") {
      // Check if the current path is NOT a public page
      const isPublicPage = publicPages.includes(pathname);

      if (!isPublicPage) {
        // Redirection logic: if not logged in and trying to access a protected page, send to login
        router.push("/login");
      }
    }
  }, [status, router, pathname, publicPages]);

  // Handle loading state with a premium spinner
  if (status === "loading") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50/50 backdrop-blur-sm">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
          <div className="relative flex items-center justify-center">
            <span className="loading loading-spinner w-16 h-16 text-teal-600"></span>
          </div>
        </div>
        <p className="mt-8 text-gray-500 font-bold tracking-widest uppercase text-xs animate-pulse">
          Verifying Session...
        </p>
      </div>
    );
  }

  // If unauthenticated and on a protected page, show nothing while redirecting
  if (status === "unauthenticated" && !publicPages.includes(pathname)) {
    return null;
  }

  // Render children for:
  // 1. Authenticated users (access all pages)
  // 2. Unauthenticated users on public pages
  return <>{children}</>;
};

export default AuthWrapper;
