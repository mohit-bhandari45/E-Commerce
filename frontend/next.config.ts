import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set the base path to match your GitHub Pages deployment URL
  basePath: '/E-Commerce',

  // Configure for static export (this is necessary for GitHub Pages)
  output: 'export',

  // You can add other configurations here
  reactStrictMode: true, // Optional: Enable React's strict mode
};

export default nextConfig;