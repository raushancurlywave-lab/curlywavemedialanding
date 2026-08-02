/**
 * Media in this project lives on Lovable's asset CDN, served from paths like
 * `/__l5e/assets-v1/...`. That path only resolves on Lovable hosting, so a
 * deployment on another host (e.g. Vercel) returns 404 for every image/video.
 *
 * Resolving those paths against the published Lovable origin makes them
 * absolute, so the same URLs work on any host.
 */
const ASSET_ORIGIN = "https://curlywavemedialanding.lovable.app";

export function assetUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/__l5e/")) return `${ASSET_ORIGIN}${url}`;
  return url;
}
