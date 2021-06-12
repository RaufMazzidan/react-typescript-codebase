const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const cracoAlias = require('craco-alias');

module.exports = {
  plugins: [{
    options: {
      baseUrl: './src',
      source: 'tsconfig',
      tsConfigPath: 'tsconfig.paths.json',
    },
    plugin: cracoAlias,
  }],
  webpack: {
    alias: {
      '@configs': path.resolve(__dirname, './src/configs/'),
      '@containers': path.resolve(__dirname, './src/containers/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@repositories': path.resolve(__dirname, './src/repositories/'),
      '@types': path.resolve(__dirname, './src/types/'),
    },
  },
};
