import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {

  console.log('hello:)');
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path((?!auth/login|auth/register).*)'],
};
