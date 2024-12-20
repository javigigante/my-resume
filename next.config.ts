const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_EMAILJS_USER: process.env.NEXT_PUBLIC_EMAIL_USER,
    NEXT_PUBLIC_EMAILJS_EMAIL_PASS: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
  eslint: {
    ignoreDuringBuilds: true,  // Desactiva ESLint durante el build
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
