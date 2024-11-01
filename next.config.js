/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/me',
    assetPrefix: '/me/',
    images: {
        unoptimized: true
    }
}
  
module.exports = nextConfig;
  