/** @type {import('next').NextConfig} */
const nextConfig = {
  //   reactStrictMode: true,
  images: {
    domains: ["i.pravatar.cc"],
  },
  transpilePackages: ["antd"],
  corePlugins: {
    preflight: false,
  },
};

export default nextConfig;
