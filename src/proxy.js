import { withAuth } from "next-auth/middleware";

export default withAuth(
  function proxy(req) {
    // Edge-level proxy logic
  },
  {
    pages: {
      signIn: "/login",
    },
  },
);

export const config = {
  matcher: [
    "/products/:path*",
    "/manageProducts/:path*",
    "/addProduct/:path*",
    "/profile/:path*",
    "/api/products/:path*", // Protect API routes at the edge too
  ],
};
