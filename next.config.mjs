import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com', 'catoolwebdav-net-cdn.gcdn.co', 'i.imgur.com'],
  },
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve(__dirname, 'src/app'));
    return config;
  },
};

export default nextConfig;