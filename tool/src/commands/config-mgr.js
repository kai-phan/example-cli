const chalk = require('chalk');
const cosmiconfig = require('cosmiconfig');
const Ajv = require('ajv').default;
const betterAjvErrors = require('better-ajv-errors').default;
const schema = require('../config/schema.json');

const ajv = new Ajv();

const explorerSync = cosmiconfig.cosmiconfigSync('tool');

module.exports = function getConfig() {
  const result = explorerSync.search(process.cwd());

  if (result?.config) {
    const validate = ajv.validate(schema, result.config);
    if (!validate) {
      console.log(betterAjvErrors(schema, result.config, ajv.errors));
      process.exit(1);
    }

    return result.config;
  } else {
    console.log(chalk.yellowBright('No config found'));
    return {
      port: 1234,
    };
  }
}