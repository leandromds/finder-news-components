/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf')

const nextConfig = {
  reactStrictMode: true,async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  webpack(config, options) {
    const { isServer } = options
    config.experiments = { 
      topLevelAwait: true,
      layers: true
    },
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
