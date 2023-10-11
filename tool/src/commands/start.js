const chalk = require('chalk');

module.exports = function start(config) {
  console.log(chalk.greenBright('Start the app'));
  console.log(chalk.gray('Receive config ' + JSON.stringify(config, null, 2)));
}