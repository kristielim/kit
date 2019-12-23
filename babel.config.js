module.exports = function(api) {
  api.cache(true);
  return {
    plugins: ["babel-plugin-root-import"],
    presets: ["babel-preset-expo", "module:react-native-dotenv"]
  };
};
