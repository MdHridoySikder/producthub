import { NextResponse } from "next/server";

// Temporary in-memory store
let products = [
  {
    id: 1,
    title: "Blue De Chance",
    description: "Fresh citrus...",
    price: "$120",
    image: "/blue.png",
  },
  {
    id: 2,
    title: "CK One",
    description: "Clean and soft...",
    price: "$60",
    image: "/ckone.png",
  },
  {
    id: 3,
    title: "Dior Sauvage",
    description: "Bold masculine...",
    price: "$150",
    image: "/dior.png",
  },
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req) {
  const newProduct = await req.json();
  newProduct.id = Date.now(); // simple unique id
  products.push(newProduct);
  return NextResponse.json(newProduct);
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get("id"));
  products = products.filter((p) => p.id !== id);
  return NextResponse.json({ success: true });
}
