/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.aceternity.com','unsplash.com','images.unsplash.com',"api.microlink.io"],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**', // Wildcard to allow all hosts
            },
          ],},
};

export default nextConfig;
