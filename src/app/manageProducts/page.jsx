"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const ManageProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#14b8a6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`/api/products/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          setProducts(products.filter((p) => p._id !== id));
          toast.success("Product deleted successfully");
        } else {
          toast.error("Failed to delete product");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-teal-500"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6 pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
            Manage Products
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Inventory Overview & Management
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-dashed border-gray-300">
            <p className="text-xl text-gray-400">
              No products found in the inventory.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full bg-gray-50 p-6">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 italic">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
                      {product.title}
                    </h2>
                    <span className="bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-sm font-bold">
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow">
                    {product.shortDesc || product.fullDesc}
                  </p>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="w-full bg-red-50 hover:bg-red-500 text-red-500 hover:text-white font-semibold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover/btn:rotate-12 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageProductsPage;
