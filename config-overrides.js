//config-overrides.js
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");

const path = require('path')

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@brand-primary": "#1cae82", "@brand-primary-tap": "#1DA57A", "@hd": "1px"},
  //   strictMath: true,
  //   noIeCompat: true,
  //   localIdentName: '[local]--[hash:base64:5]'
  }),
  fixBabelImports("import", {
      libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
  }),
  addWebpackAlias({
      ['@']: path.resolve(__dirname, 'src')
  })
)