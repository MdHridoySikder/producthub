import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

/**
 * Server-side guard to protect routes in Next.js App Router.
 * This can be used inside Server Components (pages, layouts, etc.)
 * to ensure only authenticated users can access the content.
 *
 * @returns {Promise<Object>} The user session if authenticated.
 */
export async function getServerAuthSession() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to login if no session is found
    redirect("/login");
  }

  return session;
}

/**
 * Optional: A version that just returns the session without redirecting,
 * useful for conditional rendering on the server.
 */
export async function getSessionOnly() {
  return await getServerSession(authOptions);
}
