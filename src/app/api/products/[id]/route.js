import { dbConnect } from "@/app/lib/dbConect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const productCollection = await dbConnect("products");
    const product = await productCollection.findOne({ _id: new ObjectId(id) });
    if (!product) {
      return Response.json({ message: "Product not found" }, { status: 404 });
    }
    return Response.json(product, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Error fetching product", error },
      { status: 500 },
    );
  }
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const productCollection = await dbConnect("products");
    const result = await productCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return Response.json({ message: "Product not found" }, { status: 404 });
    }

    return Response.json(
      { message: "Product deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { message: "Error deleting product", error },
      { status: 500 },
    );
  }
}
