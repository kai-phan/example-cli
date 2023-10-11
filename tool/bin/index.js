#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');
const path = require('path');
const pkgUp = require('pkg-up');

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  if (args['--start']) {
    const pkgPath = pkgUp.sync({ cwd: process.cwd() });
    const pkg = require(pkgPath);
    console.log(pkg);

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
