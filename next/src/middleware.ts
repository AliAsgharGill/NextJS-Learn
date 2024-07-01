import { NextRequest, NextResponse } from "next/server";

// Redirections

// here we redirect to home page when user visit profile page, because we give /proifle in mathcer in config
// export function middleware(request: NextRequest) {
// return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// };

// here we redirect to login page when user visit dashboard page and we are using condition here
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/dashboard") {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// Re Writing, middleware allows us to rewrite the request URL before it is sent to the server, its helpful for SEO and legacy URL support

// Benefit of its is user will see complex-dashboard in the URL but actually it will redirect to dashboard
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/complex-dashboard") {
//     return NextResponse.rewrite(new URL("/dashboard", request.url));
//   }
// }

//  Cookies
// Here we use cookies to set theme according to user preference,if user not set any theme then default theme will be dark and if user set light theme then light theme will be set even user refresh site, we can check manually in cookies in dev tool.

// export function middleware(request: NextRequest) {
//   const response = NextResponse.next();
//   const themePreference = request.cookies.get("theme")?.value;

//   if (!themePreference) {
//     response.cookies.set("theme", "dark");
//   }

//   return response;
// }

// Headers
// Everything in function is same as in cookies but we will use headers also in it. we will write custom-headers

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme")?.value;

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");
  return response;
}
