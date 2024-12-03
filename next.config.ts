import { NextConfig } from "next";
import { webpack } from "next/dist/compiled/webpack/webpack";


const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {    
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  },
  webpack(config) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: "process/browser", // Polyfill para 'process'
      })
    );

    return config;
  },
  async headers() {
    return [
      {        
        source: "/api/sendEmail",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", 
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "POST, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
};

export default nextConfig;