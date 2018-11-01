const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");
// const rewireCssModules = require("react-app-rewire-css-modules");

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }], // change importing css to less
    config
  );

  // config = rewireCssModules(config, env);

  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1890ff" },
    javascriptEnabled: true
  })(config, env);
  return config;
};
