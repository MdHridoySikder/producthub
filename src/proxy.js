import { withAuth } from "next-auth/middleware";

export default withAuth(
  function proxy(req) {
    // Custom proxy logic can go here if needed
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
    "/products",
    "/manageProducts",
    "/addProduct",
    "/profile",
  ],
};
