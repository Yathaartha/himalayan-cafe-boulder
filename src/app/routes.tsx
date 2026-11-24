import { useEffect } from "react";
import { createBrowserRouter, Outlet, ScrollRestoration, useMatches } from "react-router";

const SITE_NAME = "Himalayan Cafe";

type RouteHandle = { title?: string };

function Root() {
  const matches = useMatches();
  const title = [...matches]
    .reverse()
    .map((match) => (match.handle as RouteHandle | undefined)?.title)
    .find(Boolean);

  useEffect(() => {
    document.title = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} · Boulder, CO`;
  }, [title]);

  return (
    <>
      <Outlet />
      {/* Scrolls to top on navigation and to #hash targets such as /#visit. */}
      <ScrollRestoration />
    </>
  );
}

export const router = createBrowserRouter([
  {
    Component: Root,
    // Shown briefly while the first page's code loads.
    HydrateFallback: () => <div className="min-h-screen bg-white" />,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await import("../App")).default }),
      },
      {
        path: "menu",
        handle: { title: "Menu" } satisfies RouteHandle,
        lazy: async () => ({ Component: (await import("../pages/MenuPage")).default }),
      },
      {
        path: "gallery",
        handle: { title: "Gallery" } satisfies RouteHandle,
        lazy: async () => ({ Component: (await import("../pages/GalleryPage")).default }),
      },
      {
        path: "*",
        handle: { title: "Page not found" } satisfies RouteHandle,
        lazy: async () => ({ Component: (await import("../pages/NotFoundPage")).default }),
      },
    ],
  },
]);
