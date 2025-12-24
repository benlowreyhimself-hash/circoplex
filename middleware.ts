import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware is currently a placeholder for future Clerk authentication.
// To enable Clerk, install @clerk/nextjs and uncomment the following:
// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

export function middleware(request: NextRequest) {
    // Placeholder logic or pass-through
    return NextResponse.next();
}

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
