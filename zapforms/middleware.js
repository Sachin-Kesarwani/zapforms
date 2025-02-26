
import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
import { localStorageUtil } from './src/storage/localstorage';
import { USER_TOKEN } from './src/constants';
import CookieManager from './src/storage/cookiesstorage';
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const token = request.cookies.get(USER_TOKEN)?.value;
  const { pathname } = request.nextUrl;

    if(!token){
        const authUrl = new URL('/authentication', request.url)
        authUrl.searchParams.set("redirect", pathname);
        return  NextResponse.redirect(authUrl)
    }
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher:['/create' , "/forms" , "/respond"]
}