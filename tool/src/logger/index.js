const chalk = require('chalk');
const debug = require('debug');

module.exports = function (name) {
  return {
    log: (...args) => console.log(chalk.gray(...args)),
    warn: (...args) => console.log(chalk.yellowBright(...args)),
    highlight: (...args) => console.log(chalk.bgCyanBright(...args)),
    debug: debug(name),
  }
}