const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    devServer: {
      framework: 'react', // или другой фреймворк
      bundler: 'webpack',
      allowedHosts: ['localhost'], // Убедитесь, что здесь указаны корректные хосты
    },
  },
});
