// module.exports = withPlugins([[BrowserFS, process, Buffer]], {
//   resolve: {
//     // Use our versions of Node modules.
//     alias: {
//       fs: "browserfs/dist/shims/fs.js",
//       buffer: "browserfs/dist/shims/buffer.js",
//       path: "browserfs/dist/shims/path.js",
//       processGlobal: "browserfs/dist/shims/process.js",
//       bufferGlobal: "browserfs/dist/shims/bufferGlobal.js",
//       bfsGlobal: require.resolve("browserfs"),
//     },
//   },
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.resolve.fallback = { fs: false };
//     return config;
//   },

//   module: {
//     noParse: /browserfs\.js/,
//   },
//   // plugins: [
//   //   new webpack.ProvidePlugin({
//   //     BrowserFS: "bfsGlobal",
//   //     process: "processGlobal",
//   //     Buffer: "bufferGlobal",
//   //   }),
//   // ],
//   // DISABLE Webpack's built-in process and Buffer polyfills!
//   node: {
//     process: false,
//     Buffer: false,
//   },
// });

module.exports = {
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.resolve.fallback = { fs: false, path: false, buffer: false };
  //   return config;
  // },
};
