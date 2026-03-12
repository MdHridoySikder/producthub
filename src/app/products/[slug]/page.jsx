"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: 1,
    note: "",
  });

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(params.slug));
        setProduct(found || null);
      });
  }, [params.slug]);

  if (!product)
    return (
      <h1 className="text-center mt-24 text-4xl font-extrabold text-red-600 animate-pulse">
        Product Not Found
      </h1>
    );

  const handleDelete = () => {
    Swal.fire({
      title: `Remove "${product.title}"?`,
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#3b82f6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: `"${product.title}" removed from cart.`,
          icon: "success",
          timer: 1800,
          showConfirmButton: false,
          background: "#fee2e2",
          color: "#991b1b",
        });
      }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Product Name is required!",
        background: "#fee2e2",
        color: "#991b1b",
      });
      return;
    }
    if (!formData.quantity || formData.quantity < 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Quantity must be at least 1!",
        background: "#fee2e2",
        color: "#991b1b",
      });
      return;
    }

    Swal.fire({
      title: "Add to cart?",
      html: `
        <p class="text-gray-800">Product: <strong>${formData.name}</strong></p>
        <p class="text-gray-800">Quantity: <strong>${formData.quantity}</strong></p>
        ${formData.note ? `<p class="text-gray-600 italic">Note: ${formData.note}</p>` : ""}
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#14b8a6",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "Cancel",
      customClass: {
        popup:
          "rounded-3xl p-8 shadow-2xl backdrop-blur-md border border-white/20",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Added!",
          html: `<span class="text-gray-900 font-semibold">${formData.quantity} x ${formData.name}</span> added to cart.<br>${formData.note ? `Note: "${formData.note}"` : ""}`,
          icon: "success",
          timer: 1800,
          showConfirmButton: false,
          background: "#d1fae5",
          color: "#065f46",
        });
        setShowForm(false);
        setFormData({ name: "", quantity: 1, note: "" });
      }
    });
  };

  const handleAddClick = () => setShowForm(true);

  const rating = 4.5;
  const features = [
    "Long-lasting fragrance",
    "Premium ingredients",
    "Unisex scent",
    "Perfect gift",
  ];

  return (
    <div className="max-w-6xl mx-auto py-24 px-6 relative ">
      {/* Go Back Button */}
      <div className="mb-8">
        <Link
          href="/products"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-3xl shadow-lg hover:from-cyan-500 hover:to-teal-400 hover:shadow-xl transition font-semibold tracking-wide"
        >
          ← Back to Products
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative w-full h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-md hover:shadow-3xl transition-transform duration-500 transform hover:scale-105">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-6"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-teal-400">
              {product.title}
            </h1>
            <p className="text-gray-700 mt-4 text-lg">{product.description}</p>

            <div className="flex items-center gap-4 mt-6">
              <p className="text-3xl font-bold text-gray-900">
                {product.price}
              </p>
              <span
                className={`px-5 py-1 rounded-full text-sm font-semibold tracking-wide ${
                  product.id % 2 === 0
                    ? "bg-green-200 text-green-900 animate-pulse"
                    : "bg-yellow-200 text-yellow-900 animate-pulse"
                }`}
              >
                {product.id % 2 === 0 ? "In Stock" : "Limited Stock"}
              </span>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-yellow-500 text-2xl transition-transform hover:scale-125 ${
                    i < Math.floor(rating) ? "animate-pulse" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-gray-500 text-sm ml-2">{rating} / 5</span>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-2 list-disc list-inside text-gray-700">
              {features.map((feat, idx) => (
                <li
                  key={idx}
                  className="hover:text-cyan-600 transition-colors duration-300"
                >
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={handleAddClick}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-3xl shadow-xl hover:shadow-2xl hover:from-teal-500 hover:to-cyan-600 transition-transform transform hover:-translate-y-1 font-semibold tracking-wide"
            >
              Add to Cart
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-3xl shadow-xl hover:shadow-2xl hover:from-red-600 hover:to-rose-600 transition-transform transform hover:-translate-y-1 font-semibold tracking-wide"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl w-full max-w-md shadow-2xl border border-white/20 animate-fade-in">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-teal-400">
              Add to Cart
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              {/* Product Name */}
              <div className="relative">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition shadow-inner bg-white/70 backdrop-blur-sm"
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-cyan-600">
                  Product Name
                </label>
              </div>

              {/* Quantity */}
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  placeholder=" "
                  className="peer w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition shadow-inner bg-white/70 backdrop-blur-sm"
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-cyan-600">
                  Quantity
                </label>
              </div>

              {/* Note */}
              <div className="relative">
                <textarea
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                  placeholder=" "
                  rows={3}
                  className="peer w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition shadow-inner bg-white/70 backdrop-blur-sm resize-none"
                />
                <label className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-cyan-600">
                  Note (optional)
                </label>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2 bg-gray-200 text-gray-800 rounded-2xl hover:bg-gray-300 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-2xl hover:from-teal-500 hover:to-cyan-600 transition font-semibold"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
