import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicRoutes = ["/", "/sign-in(.*)", "/api/webhook/clerk", "/api/webhook/stripe"];

export default clerkMiddleware((_, req) => {
  const isPublicRoute = publicRoutes.some((pattern) => {
    const regex = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
    return regex.test(req.nextUrl.pathname);
  });

  if (isPublicRoute) {
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};