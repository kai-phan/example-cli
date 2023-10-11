const chalk = require('chalk');
const pkgUp = require('pkg-up');

module.exports = function getConfig() {
  const configPath = pkgUp.sync({ cwd: process.cwd() });
  const pkg = require(configPath);

  const config = pkg.tool;

  if (config) {
    return config;
  } else {
    console.log(chalk.yellowBright('No config found'));
    return {
      port: 1234,
    };
  }
}