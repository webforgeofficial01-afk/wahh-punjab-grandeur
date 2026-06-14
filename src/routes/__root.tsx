import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gold text-glow-gold">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page is not on the menu.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gold px-6 py-3 text-sm font-medium tracking-widest uppercase text-background transition-colors hover:bg-gold-light"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl tracking-wide text-gold">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Please try again.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-gold px-6 py-3 text-sm font-medium uppercase tracking-widest text-background transition-colors hover:bg-gold-light"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-gold/40 bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:bg-gold/10"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Wahh Punjab Grandeur — Where Punjab Becomes an Experience" },
      {
        name: "description",
        content:
          "Wahh Punjab Grandeur — a cinematic luxury Punjabi fine dining destination. Heritage, fire, artistry and world-class hospitality. Reserve your table.",
      },
      { name: "author", content: "Wahh Punjab Grandeur" },
      { property: "og:title", content: "Wahh Punjab Grandeur — Where Punjab Becomes an Experience" },
      {
        property: "og:description",
        content: "Cinematic luxury Punjabi fine dining. Reserve your table.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Wahh Punjab Grandeur — Where Punjab Becomes an Experience" },
      { name: "description", content: "Wahh Punjab – A premium fine-dining experience celebrating authentic Punjabi heritage with royal ambiance, traditional flavors, and modern luxury dining." },
      { property: "og:description", content: "Wahh Punjab – A premium fine-dining experience celebrating authentic Punjabi heritage with royal ambiance, traditional flavors, and modern luxury dining." },
      { name: "twitter:description", content: "Wahh Punjab – A premium fine-dining experience celebrating authentic Punjabi heritage with royal ambiance, traditional flavors, and modern luxury dining." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ZWHXJLVtgoeOaymDtsDaALslL6i2/social-images/social-1781435439938-1000138926.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ZWHXJLVtgoeOaymDtsDaALslL6i2/social-images/social-1781435439938-1000138926.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: "/__l5e/assets-v1/9e8cc383-6282-4bb5-bc1f-c07b8d8cb47a/wahh-punjab-logo.jpg" },
      { rel: "apple-touch-icon", href: "/__l5e/assets-v1/9e8cc383-6282-4bb5-bc1f-c07b8d8cb47a/wahh-punjab-logo.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,600;1,700;1,800&family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
