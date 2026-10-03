/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Keep Bing verification reachable; redirect everything else
        source: "/:path((?!BingSiteAuth\\.xml$).*)",
        destination:
          "https://animeloud.com.br/:path?utm_source=animeland&utm_medium=referral&utm_campaign=portal_antigo",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
