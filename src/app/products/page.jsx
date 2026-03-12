"use client"; // needed for client-side interactivity
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

async function getProducts() {
  const res = await fetch("http://localhost:3000/data/products.json");
  const data = await res.json();
  return data;
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
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">
          Our Perfume Collection
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          Discover premium fragrances crafted for every moment
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Search perfume..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 focus:border-cyan-400 outline-none px-5 py-3 rounded-full w-full max-w-md shadow-md focus:shadow-lg transition"
        />
      </div>

      {/* Products */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[260px] bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[220px]">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {product.title}
                  </h2>
                  <p className="text-gray-500 text-sm line-clamp-2 mt-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-lg font-bold text-black">
                    {product.price}
                  </span>

                  <Link
                    href={`/products/${product.id}`}
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full hover:from-cyan-500 hover:to-teal-400 shadow-md hover:shadow-lg transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
