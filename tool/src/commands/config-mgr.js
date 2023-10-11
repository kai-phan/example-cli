const chalk = require('chalk');
const cosmiconfig = require('cosmiconfig');

const explorerSync = cosmiconfig.cosmiconfigSync('tool');

module.exports = function getConfig() {
  const result = explorerSync.search(process.cwd());

  if (result?.config) {
    return result.config;
  } else {
    console.log(chalk.yellowBright('No config found'));
    return {
      port: 1234,
    };
  }
}