/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://animeloud.com.br/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
