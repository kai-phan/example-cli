#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');

const getConfig = require('../src/commands/config-mgr');
const start = require('../src/commands/start');
const logger = require('../src/logger')('bin');

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  if (args['--start']) {
    const config = getConfig();
    start(config);
  }
} catch (e) {
  logger.warn(e.message)
  logger.log()
  usage();
}

function usage() {
  logger.log('Usage: tool [options]');
  logger.log();
  logger.log('Options:');
  logger.log('  --start    start');
  logger.log('  --build    build');
  logger.log();
}
