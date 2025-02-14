/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    domains: ['localhost'],
  },
  serverRuntimeConfig: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

export default nextConfig;
