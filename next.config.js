/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  images: {
    domains: ['example.domain.com'],
  },
}






module.exports = nextConfig


// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Add support for loading mp4 files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          outputPath: 'static/media',
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
};
