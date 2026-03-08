import Image from "next/image";

// Fetch products from public folder
async function getProducts() {
  const res = await fetch("http://localhost:3000/data/products.json");
  return res.json();
}

const ProductDetails = async ({ params }) => {
  // Unwrap the params slug
  const { slug } = await params;

  const products = await getProducts();

  const product = products.find((p) => p.id === Number(slug));

  if (!product) {
    return <h1 className="text-center mt-20 text-2xl">Product Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <p className="text-gray-500 mt-4">{product.description}</p>

        <p className="text-2xl font-bold mt-6">{product.price}</p>

        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
