import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the tracing root to this project (a stray lockfile elsewhere on the
  // machine can otherwise be picked as the workspace root).
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
