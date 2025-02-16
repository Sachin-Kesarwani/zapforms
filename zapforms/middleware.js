
import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
import { localStorageUtil } from './src/storage/localstorage';
import { USER_TOKEN } from './src/constants';
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const token = localStorageUtil.get(USER_TOKEN);
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
  matcher: '/create',
}