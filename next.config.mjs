/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination:
          "https://animeloud.com.br/:path*?utm_source=animeland&utm_medium=301_redirect&utm_campaign=portal_antigo",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
