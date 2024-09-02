/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { resolver } = config;

  config.resolver = {
    ...resolver,
    assetExts: [...resolver.assetExts, "obj", "png", "jpg", "mtl", "jpeg"],
  };

  return config;
})();
