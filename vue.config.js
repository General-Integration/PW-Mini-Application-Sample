const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "",
  // assetsDir: 'pw-merchant-sample',
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true
  }
})
