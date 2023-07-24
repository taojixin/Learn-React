const path = require("path");
const CracoLess = require("craco-less");
module.exports = {
  plugins: [
    {
      plugin: CracoLess,
    },
  ],
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
    },
  },
};
