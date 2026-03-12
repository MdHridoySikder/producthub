import { dbConnect } from "@/app/lib/dbConect";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const productCollection = await dbConnect("products");
    const products = await productCollection.find({}).toArray();
    return Response.json(products, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Error fetching products", error },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const data = await request.json();
    const productCollection = await dbConnect("products");
    const result = await productCollection.insertOne(data);
    return Response.json(
      { message: "Product added successfully", result },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      { message: "Error adding product", error },
      { status: 500 },
    );
  }
}
