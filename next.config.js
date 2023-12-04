/** @type {import('next').NextConfig} */
const path = require('path')
module.exports = {
  distDir: 'build',
  images: {
    loaders: ['style-loader', 'css-loader', 'less-loader'],
  },
  reactStrictMode: true,
  trailingSlash: false,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
    BASE_CHAIN: process.env.BASE_CHAIN,
  },
}
