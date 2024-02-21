const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
      name: "Aspire",
      themeColor: '#403B3E',
  },
})
