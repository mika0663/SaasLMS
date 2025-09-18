import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function authGuard() {
  const session = await auth();
  
  if (!session?.userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
}