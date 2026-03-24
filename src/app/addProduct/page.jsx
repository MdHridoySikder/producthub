"use client"; // Must be at top for client-side interactivity

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

import { useRouter } from "next/navigation";

const AddProductsPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        Swal.fire({
          title: "Success!",
          text: "Product added successfully",
          icon: "success",
          confirmButtonColor: "#14b8a6",
        });
        setFormData({
          title: "",
          shortDesc: "",
          fullDesc: "",
          price: "",
          imageUrl: "",
        });
      } else if (res.status === 401) {
        Swal.fire({
          title: "Login Required",
          text: "You need to be logged in to add a product.",
          icon: "warning",
          confirmButtonColor: "#14b8a6",
          confirmButtonText: "Go to Login",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/login?callbackUrl=/addProduct");
          }
        });
      } else {
        toast.error("Failed to add product");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 pt-32">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
              Add New Product
            </h1>
            <p className="text-gray-500 mt-2">
              Enter the details of your premium fragrance
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Product Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Blue De Chance"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="0.00"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Short Description
              </label>
              <input
                type="text"
                name="shortDesc"
                placeholder="Brief summary of the fragrance"
                value={formData.shortDesc}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Full Description
              </label>
              <textarea
                name="fullDesc"
                placeholder="Tell us more about the notes and longevity..."
                value={formData.fullDesc}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all min-h-[120px]"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                placeholder="https://example.com/image.png"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-bold py-4 rounded-2xl shadow-lg border-b-4 border-cyan-700 hover:shadow-cyan-400/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : null}
              {loading ? "Processing..." : "Add Product Now"}
            </button>
          </form>
        </div>
      </div>
  );
};

export default AddProductsPage;
