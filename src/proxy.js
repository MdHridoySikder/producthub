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
  matcher: [], // All routes public by default
};
