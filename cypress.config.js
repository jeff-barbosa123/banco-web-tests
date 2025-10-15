const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:4000",
    experimentalStudio: true, // 🔹 Habilita o Studio Clássico
  },
});