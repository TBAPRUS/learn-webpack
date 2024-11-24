module.exports = {
  mode: "production",
  entry: {
    aChunk: {
      import: "./src/a.js",
      filename: "a-chunk.js",
    },
    bChunk: {
      import: "./src/b.js",
      filename: "b-chunk.js",
    },
  },
};
