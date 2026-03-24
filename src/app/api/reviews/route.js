import { dbConnect } from "@/app/lib/dbConect";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = await request.json();
    const reviewCollection = await dbConnect("review");

    // Assign an id automatically if needed
    const lastReview = await reviewCollection
      .find()
      .sort({ id: -1 })
      .limit(1)
      .toArray();
    const newId = lastReview.length > 0 ? lastReview[0].id + 1 : 1;

    const newReview = {
      ...data,
      id: newId,
      dateAdded: new Date().toISOString(),
    };
    const result = await reviewCollection.insertOne(newReview);

    return new Response(
      JSON.stringify({ message: "Review added", review: newReview }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error adding review", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

export async function GET(request) {
  try {
    const reviewCollection = await dbConnect("review");
    const reviews = await reviewCollection.find({}).toArray();

    return new Response(
      JSON.stringify({ reviews, message: "Reviews fetched successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching reviews", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
