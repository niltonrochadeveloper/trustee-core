/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "core",
        remotes: {
          product_1_app: `product_1_app@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          product_2_app: `product_2_app@http://localhost:3002/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./store": "./src/store",
        },
        extraOptions: {
          debug: false,
          exposePages: false,
        },
        shared: [
          {
            react: {
              singleton: true,
              requiredVersion: false,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: false,
            },
            redux: {
              singleton: true,
              requiredVersion: false,
            },
            "react-redux": {
              singleton: true,
              requiredVersion: false,
            },
            "redux-persist": {
              singleton: true,
              requiredVersion: false,
            },
            "@reduxjs/toolkit": {
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );

    return config;
  },
};

export default nextConfig;
