"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Swal from "sweetalert2";
import Link from "next/link";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (params.slug) {
      // JSON থেকে fetch করা
      fetch("/data/products.json")
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((p) => p.id.toString() === params.slug); // slug = id
          setProduct(found || null);
        })
        .catch(() => setProduct(null));
    }
  }, [params.slug]);

  if (!product)
    return (
      <h1 className="text-center mt-24 text-4xl font-extrabold text-red-600 animate-pulse">
        Product Not Found
      </h1>
    );

  const handleAddToCart = () => {
    Swal.fire({
      title: "Add to Cart?",
      text: `"${product.title}" will be added to your cart.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#14b8a6",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Added!",
          text: `"${product.title}" has been added to your cart.`,
          icon: "success",
          timer: 1800,
          showConfirmButton: false,
        });
      }
    });
  };

  const rating = 4.5;
  const features = [
    "Long-lasting fragrance",
    "Premium ingredients",
    "Unisex scent",
    "Perfect gift",
  ];

  return (
    <div className="max-w-6xl mx-auto py-24 px-6 relative">
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
            src={product.image || "/blue.png"}
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
                ${product.price}
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

          {/* Action Button */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={handleAddToCart}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-3xl shadow-xl hover:shadow-2xl hover:from-cyan-600 hover:to-teal-600 transition-transform transform hover:-translate-y-1 font-semibold tracking-wide"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
