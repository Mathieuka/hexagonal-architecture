const { CracoAliasPlugin, configPaths } = require("react-app-rewire-alias");
const path = require(`path`);

const aliasMap = configPaths("./tsconfig.paths.json");

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: { alias: aliasMap },
    },
  ],
  eslint: {
    enable: false,
  },
  webpack: {
    alias: {
      "@infrastructure": path.resolve(__dirname, "../../../infrastructure"),
      "@domain": path.resolve(__dirname, "../../../domain"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
};
