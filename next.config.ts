import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // WordPress URL redirects
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/feed/:path*", destination: "/blog", permanent: true },
      {
        source: "/category/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/blog",
        permanent: true,
      },
      // Map old WP slug patterns to new blog slugs
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
