/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // 3d support
    config.module.rules.push({
      test: /\.(gltf|glb)$/i,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('file-loader'),
          options: {
            outputPath: 'static/media'
          }
        }
      ]
    });

    // media support
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/i,
      use: [
        {
          loader: require.resolve('file-loader'),
          options: {
            outputPath: 'static/media'
          }
        }
      ]
    });

    // shader support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader']
    });

    // font support
    config.module.rules.push({
      test: /\.(woff|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: require.resolve('file-loader'),
          options: {
            name: '[name].[ext]',
            outputPath: 'static/fonts'
          }
        }
      ]
    });

    return config;
  }
};

module.exports = nextConfig;
