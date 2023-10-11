#!/usr/bin/env node
const arg = require('arg');

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  if (args['--start']) {
    console.log('start');
  }
} catch (e) {
  console.log(e.message);
  console.log();
  usage();
}

function usage() {
  console.log('Usage: tool [options]');
  console.log();
  console.log('Options:');
  console.log('  --start    start');
  console.log('  --build    build');
  console.log();
}
