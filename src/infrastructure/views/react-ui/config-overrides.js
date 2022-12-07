const { aliasDangerous } = require("react-app-rewire-alias/lib/aliasDangerous");

const aliasMap = {
  "@domain": "../../../domain",
  "@infrastructure": "../../../infrastructure",
  "@components": "./src/components",
};

module.exports = aliasDangerous(aliasMap);
