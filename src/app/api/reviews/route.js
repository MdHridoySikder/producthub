import { dbConnect } from "@/app/lib/dbConect";

const reviewsData = [
  {
    id: 1,
    title: "Perfume - Ocean Breeze",
    shortDesc: "Fresh and long-lasting fragrance",
    fullDesc:
      "Ocean Breeze Perfume with 100ml spray bottle. Ideal for daily wear and special occasions. Long-lasting scent up to 12 hours.",
    price: 45,
    imageUrl:
      "https://via.placeholder.com/200x200.png?text=Perfume+Ocean+Breeze",
    dateAdded: "2026-03-12",
  },
  {
    id: 2,
    title: "Perfume - Midnight Rose",
    shortDesc: "Elegant floral scent",
    fullDesc:
      "Midnight Rose Perfume with 75ml bottle. Captivating floral fragrance perfect for evening wear. Comes in a beautiful gift box.",
    price: 60,
    imageUrl:
      "https://via.placeholder.com/200x200.png?text=Perfume+Midnight+Rose",
    dateAdded: "2026-03-11",
  },
];

export async function POST(request) {
  const newReviews = await request.json();
  console.log(newReviews);
  newReviews.push({ ...newReviews, id: newReviews?.length + 1 });
  return Response.json({
    massage: "reviews add ",
    review: newReviews,
  });
}

export async function GET(request) {
  const reviewsRes = await dbConnect("review");
  const reviews = await reviews.find({}).toArray();
  return Response.json({ reviewsData, message: "reviews is working" });
}
