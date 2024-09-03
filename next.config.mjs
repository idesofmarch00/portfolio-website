/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
    images: {
        domains: ['assets.aceternity.com','unsplash.com','images.unsplash.com',"api.microlink.io"],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**', 
            },
          ],},
};

export default nextConfig;
