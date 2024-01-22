const path = require('path');

module.exports = function override(config) {
  // Add the resolve.fallback configuration for 'path'
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": require.resolve("path-browserify")
  };

  return config;
}
