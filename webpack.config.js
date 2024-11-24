const { optimize } = require("webpack");

module.exports = {
  // mode: "production",
  entry: {
    aChunk: "./src/a.js",
    bChunk: "./src/b.js",
    vendor: "./src/vendor.js",
  },
  output: {
    filename: "./dist/[name].js",
  },
  plugins: [
    new optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "./dist/vendor.js",
    }),
  ],
};
