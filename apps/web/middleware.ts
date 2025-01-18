import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { ROUTES_PATHS, type RoutesPaths } from "@/constants/routes";

const getPrivateRoutes = (routes: RoutesPaths) => {
  const privateRoutes: string[] = [];

  for (const key in routes.private) {
    const subRoutes = routes.private[key];
    for (const subKey in subRoutes) {
      const path = subRoutes[subKey];
      if (path) {
        privateRoutes.push(path);
      }
    }
  }

  return privateRoutes;
};

const privateRoutes = getPrivateRoutes(ROUTES_PATHS);
const isPrivateRoute = createRouteMatcher(privateRoutes);

console.log("privateRoutes", privateRoutes);

export default clerkMiddleware(async (auth, request) => {
  if (isPrivateRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
