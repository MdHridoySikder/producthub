export async function GET(request, { params }) {
  const { id } = await params;
  console.log("single reviews");
  const review = reviewData.find((fd) => fd.id === parseInd(id));

  return Response.json({
    review: "review",
    message: "single reviews is working",
  });
}
