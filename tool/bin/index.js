#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  if (args['--start']) {
    console.log(chalk.bgCyanBright('start'));
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
