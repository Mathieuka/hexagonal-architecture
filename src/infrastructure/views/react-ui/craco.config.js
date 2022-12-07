const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      // "@infrastructure": path.resolve(__dirname, "../../../infrastructure"),
      // "@domain": path.resolve(__dirname, "../../../domain"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
};
