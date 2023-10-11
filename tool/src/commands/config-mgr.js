const cosmiconfig = require('cosmiconfig');
const Ajv = require('ajv').default;
const betterAjvErrors = require('better-ajv-errors').default;

const schema = require('../config/schema.json');
const logger = require('../logger')('config-mgr');

const ajv = new Ajv();

const explorerSync = cosmiconfig.cosmiconfigSync('tool');

module.exports = function getConfig() {
  const result = explorerSync.search(process.cwd());

  if (result?.config) {
    const validate = ajv.validate(schema, result.config);
    if (!validate) {
      logger.warn(betterAjvErrors(schema, result.config, ajv.errors));
      process.exit(1);
    }

    return result.config;
  } else {
    logger.warn('No config file found, use default config')
    return {
      port: 1234,
    };
  }
}