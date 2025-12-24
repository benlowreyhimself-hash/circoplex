/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Static export for initial version
    images: {
        unoptimized: true, // Required for static export
    },
};

module.exports = nextConfig;
