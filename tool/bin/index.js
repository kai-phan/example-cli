#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');

const getConfig = require('../src/commands/config-mgr');
const start = require('../src/commands/start');

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
  console.log(chalk.yellowBright(e.message));
  console.log();
  usage();
}

function usage() {
  console.log(chalk.whiteBright('Usage: tool [options]'));
  console.log();
  console.log('Options:');
  console.log('  --start    start');
  console.log('  --build    build');
  console.log();
}
