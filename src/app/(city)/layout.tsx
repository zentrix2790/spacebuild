/**
 * Render city landing pages on request instead of prerendering all of them
 * during `next build`. One worker otherwise retains every page and the build
 * stalls after roughly 200 of 500+ routes.
 */
export const dynamic = "force-dynamic";

export default function CityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
