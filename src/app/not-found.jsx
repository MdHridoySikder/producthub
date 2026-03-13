import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>

      <p className="text-gray-600 max-w-md mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
