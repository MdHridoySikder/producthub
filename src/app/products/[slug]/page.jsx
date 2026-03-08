"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const params = useParams(); // slug capture
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data/products.json") // Local JSON fetch
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (item) => item.id === Number(params.slug), // convert slug to number
        );
        setProduct(found || null);
      });
  }, [params.slug]);

  if (!product)
    return (
      <h1 className="text-center mt-20 text-2xl text-red-500">
        Product Not Found
      </h1>
    );

  return (
    <div className="max-w-5xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">
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
      </div>
    </div>
  );
}
