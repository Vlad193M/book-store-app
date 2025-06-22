import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  if (!token && request.nextUrl.pathname.startsWith('/cart')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // matcher: ['/api/:path((?!auth/login|auth/register).*)'],
  matcher: ['/cart:path*'],
};
