import { NextResponse } from "next/server";

const BLOCKED_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE", "TRACE", "CONNECT"]);
const PROBE_PATHS = [
  "/.env",
  "/.git",
  "/wp-admin",
  "/wp-login.php",
  "/xmlrpc.php",
  "/phpmyadmin",
  "/admin",
  "/vendor",
  "/server-status",
  "/boaform",
  "/cgi-bin",
];
const BAD_BOT_PATTERN =
  /(ahrefs|babbar|bytespider|httpclient|hydra|libwww-perl|masscan|mj12bot|nmap|nikto|petalbot|scrapy|semrush|sqlmap|zgrab)/i;

function withSecurityHeaders(response) {
  response.headers.set("X-Bot-Protection", "active");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return response;
}

function hasProbePath(pathname) {
  return PROBE_PATHS.some((segment) => pathname === segment || pathname.startsWith(`${segment}/`));
}

export function middleware(request) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;
  const method = request.method.toUpperCase();
  const userAgent = request.headers.get("user-agent") || "";

  if (hasProbePath(pathname)) {
    return withSecurityHeaders(new NextResponse("Not found", { status: 404 }));
  }

  if (BLOCKED_METHODS.has(method)) {
    return withSecurityHeaders(
      new NextResponse("Method not allowed", {
        status: 405,
        headers: {
          Allow: "GET, HEAD, OPTIONS",
        },
      }),
    );
  }

  if (BAD_BOT_PATTERN.test(userAgent)) {
    return withSecurityHeaders(new NextResponse("Forbidden", { status: 403 }));
  }

  return withSecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon-cup.svg|robots.txt|sitemap.xml).*)",
  ],
};
