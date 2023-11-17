/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf')

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options
    config.experiments = { 
      topLevelAwait: true,
      layers: true
    }
    config.plugins.push(
      new NextFederationPlugin({
        name: 'finderNewsComponents',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './header': './src/components/Header.tsx',
        },
        shared: {},
      }),
    )
    return config
  },
}

module.exports = nextConfig
