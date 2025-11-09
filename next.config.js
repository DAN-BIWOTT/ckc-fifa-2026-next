/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        "*.css": ["@tailwindcss/postcss"],
      },
    },
  },
};

export default nextConfig;
