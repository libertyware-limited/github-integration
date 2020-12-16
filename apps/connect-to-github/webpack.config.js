/* eslint-disable @typescript-eslint/no-var-requires */
const nxWebpack = require('@nrwl/react/plugins/webpack');
const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require("tailwindcss")

function patchWebpackPostcssPlugins(webpackConfig, addPlugins) {
  const webpackScssRules = webpackConfig.module.rules.filter((x) =>
    x.test.toString().includes('css')
  );
  if (!webpackScssRules) {
    console.warn('[webpack-ext.config.js]: No scss rule found');
  } else {
    for (const rules of webpackScssRules) {
      for (const rule of rules.oneOf) {
        const postcssLoader = rule.use.find(
          (x) => x.loader && x.loader.includes('postcss-loader')
        );
        if (postcssLoader) {
          const pluginFunc = postcssLoader.options.plugins;
          const newPluginFunc = function () {
            let plugins = pluginFunc.apply(this, arguments);
            plugins = plugins.concat(addPlugins);
            return plugins;
          };
          postcssLoader.options.plugins = newPluginFunc;
        }
      }

    }
  }
}

module.exports = (config, context) => {

  config = nxWebpack(config);
  patchWebpackPostcssPlugins(config, [
    postcssPresetEnv({
      stage: 2,
    }),
    tailwindcss(),
  ]);
  return {
    ...config,
    node: {
      process: true,
      global: true
    }
  };
};
