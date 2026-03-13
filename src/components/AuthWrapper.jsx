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

  useEffect(() => {
    // Only redirect if the session has finished loading and the user is unauthenticated
    if (status === "unauthenticated") {
      // Avoid redirecting if we are already on the login or register page
      if (pathname !== "/login" && pathname !== "/register") {
        router.push("/login");
      }
    }
  }, [status, router, pathname]);

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

  // If unauthenticated, show nothing (or we could show a brief "Redirecting..." message)
  // while the useEffect handles the router.push
  if (status === "unauthenticated") {
    return null;
  }

  // If authenticated, render the protected content
  return <>{children}</>;
};

export default AuthWrapper;
