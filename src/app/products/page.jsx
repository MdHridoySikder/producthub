import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/data/products.json");
  const data = await res.json();
  return data;
}

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
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
          className="border border-gray-300 focus:border-black outline-none px-5 py-3 rounded-full w-full max-w-md shadow-sm"
        />
      </div>

      {/* Products */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
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
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.title}
              </h2>

              <p className="text-gray-500 text-sm line-clamp-2 mt-2">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-5">
                <span className="text-lg font-bold text-black">
                  {product.price}
                </span>

                <Link
                  href={`/products/${product.id}`}
                  className="px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
