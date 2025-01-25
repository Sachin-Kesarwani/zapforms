
import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const isLogged=true;
    if(!isLogged){
        return  NextResponse.redirect(new URL('/authentication', request.url))
    }
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/create',
}