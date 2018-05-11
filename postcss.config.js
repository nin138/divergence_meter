module.exports = {
  plugins: [
    require("stylelint")(),
    require('postcss-reporter')({clearMessages: true}),
    require("postcss-import")(),
    require("postcss-cssnext")(),
  ]
};
