import { Home } from "@/pages";
import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router-dom";

const NotFound = lazy(() => import("@/pages/NotFound"));
export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    ),
  },
];

export default routes;
