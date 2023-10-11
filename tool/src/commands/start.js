const logger = require('../logger')('commands:start');

module.exports = function start(config) {
  logger.highlight('Start the app');
  logger.debug('Receive config ' + JSON.stringify(config, null, 2));
}