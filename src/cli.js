#!/usr/bin/env node

const stdio = require('stdio');
const { awsParameterFileToString } = require('./helpers');

const ops = stdio.getopt(
  {
    input: {
      key: 'i',
      args: 1,
      description: 'The path to an AWS parameter file in JSON format',
      mandatory: true,
    },
  },
  'aws-parameter-file-to-string -i path/to/param-file.json',
);

try {
  const str = awsParameterFileToString(ops.input);
  console.log(str);
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
