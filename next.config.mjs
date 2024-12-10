/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
          {
            protocol: "http",
            hostname: "97.74.85.84",
            port: "3030",
            pathname: "/media/**",
          },
        ],
      },
};

export default nextConfig;

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: '**',
//         },
//       ],
//     },
//   }
