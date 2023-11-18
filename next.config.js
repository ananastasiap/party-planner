const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  reactStrictMode: true,

  webpack: (config) => {
    config.plugins.push(new StylelintPlugin())
    return config
  },
}
