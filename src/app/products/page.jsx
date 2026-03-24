"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

async function getProducts() {
  try {
    const res = await fetch("/data/products.json");
    if (!res.ok) return [];
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Fetch products
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  // Filter products based on search
  useEffect(() => {
    const filteredProducts = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
    );
    setFiltered(filteredProducts);
  }, [search, products]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
            Our Perfume Collection
          </h1>
          <p className="text-gray-500 mt-3 text-lg font-medium">
            Discover premium fragrances crafted for every moment
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-xl group">
            <input
              type="text"
              placeholder="Search premium scents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-2 border-gray-100 bg-white/50 backdrop-blur-sm focus:border-teal-400 outline-none px-8 py-4 rounded-[2rem] w-full shadow-lg focus:shadow-teal-200/20 transition-all duration-300 text-lg"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-teal-500">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filtered.map((product) => (
            <div
              key={product.id} // ensure your JSON has unique "id" field
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-[300px] bg-gray-50/50 p-8">
                <Image
                  src={product.image || "/blue.png"} // fallback /blue.png
                  alt={product.title}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-md text-teal-600 font-black px-4 py-2 rounded-2xl shadow-sm text-sm border border-teal-50">
                    ${product.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6 flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-gray-500 text-sm font-medium line-clamp-2 mt-3 leading-relaxed">
                    {product.shortDesc || product.description}
                  </p>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="w-full py-4 text-center font-black bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-2xl hover:from-teal-600 hover:to-cyan-700 shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  View Details
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default ProductsPage;
