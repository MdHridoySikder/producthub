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
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
          Manage Products
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
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
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[260px] bg-gray-100">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl || "/blue.png"}
                    alt={product.title}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[220px]">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {product.title}
                  </h2>
                  <p className="text-gray-500 text-sm line-clamp-2 mt-2">
                    {product.shortDesc || product.fullDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-lg font-bold text-black">
                    ${product.price}
                  </span>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-full hover:bg-red-600 shadow-md hover:shadow-lg transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProductsPage;
