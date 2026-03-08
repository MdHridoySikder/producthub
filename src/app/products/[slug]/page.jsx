"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quantity: 1,
  });

  // Load product from JSON
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
      <h1 className="text-center mt-20 text-2xl text-red-500">
        Product Not Found
      </h1>
    );

  // Handle Delete
  const handleDelete = () => {
    toast.success(`"${product.title}" removed from card!`);
  };

  // Handle Add button click
  const handleAddClick = () => {
    setShowForm(true);
  };

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success(
      `${formData.quantity} x ${formData.name || product.title} added to card!`,
    );
    setShowForm(false);
    setFormData({ name: "", quantity: 1 });
  };

  return (
    <div className="max-w-5xl mx-auto py-20 px-6">
      <Toaster position="top-right" />

      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative w-full h-[400px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-gray-500 mt-4">{product.description}</p>
          <p className="text-2xl font-bold mt-6">{product.price}</p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddClick}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Add Card
            </button>
            <button
              onClick={handleDelete}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Delete Card
            </button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md relative">
            <h2 className="text-2xl font-bold mb-4">Add to Card</h2>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={product.title}
                  className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
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
