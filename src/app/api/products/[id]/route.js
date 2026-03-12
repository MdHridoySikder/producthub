import { dbConnect } from "@/app/lib/dbConect";
import { ObjectId } from "mongodb";

export async function DELETE(request, { params }) {
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
