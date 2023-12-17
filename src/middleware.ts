export { default } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname == "/login" || pathname == "/admin/login") {
    return NextResponse.next();
  }
}
