const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }], // change importing css to less
    config
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color": "#17a2b8",
      "@link-color": "#F52D56",
      "@text-color": "#242e42"
    },
    javascriptEnabled: true
  })(config, env);
  return config;
};
