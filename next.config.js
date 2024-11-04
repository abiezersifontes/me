/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = isGithubActions ? '/me' : '';

const nextConfig = {
    output: 'export',
    basePath: repo,
    assetPrefix: repo,
    images: {
        unoptimized: true
    }
}
  
module.exports = nextConfig;
