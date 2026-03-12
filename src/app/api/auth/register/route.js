import { dbConnect } from "@/app/lib/dbConect";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { name, email, password, image } = await request.json();

    if (!name || !email || !password) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    const userCollection = await dbConnect("users");
    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      image: image || "",
      createdAt: new Date().toISOString(),
    };

    const result = await userCollection.insertOne(newUser);

    return Response.json(
      { message: "User registered successfully", userId: result.insertedId },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json(
      { message: "An error occurred during registration", error },
      { status: 500 },
    );
  }
}
