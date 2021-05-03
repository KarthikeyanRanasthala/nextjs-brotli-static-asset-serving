const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|svg)$/,
        minRatio: 0.8,
      })
    );
    config.plugins.push(
      new CompressionPlugin({
        filename: "[path][base].gz",
        algorithm: "gzip",
        test: /\.(js|css|svg)$/,
        minRatio: 0.8,
      })
    );
    return config;
  },
  compress: false,
};
