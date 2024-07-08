import { clerkMiddleware } from "@clerk/nextjs/server";

const publicRoutes = ["/", "/contact"];

const handler = (req: any, res: any, next: () => void) => {
  // Check if the request path is a public route
  if (publicRoutes.includes(req.nextUrl.pathname)) {
    return next();
  }
  
  return clerkMiddleware()(req, res);
};

export default handler;

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
