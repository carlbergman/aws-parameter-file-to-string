const { readFileSync } = require('fs');

const readJsonFile = (path, encoding = 'utf-8') => {
  const data = readFileSync(path, { encoding });

  try {
    const j = JSON.parse(data);
    return j;
  } catch (err) {
    throw new Error(`${path} is not a valid JSON file`);
  }
};

const awsParameterFileToString = (parameterFile) => {
  const j = readJsonFile(parameterFile);

  if (Array.isArray(j) === false) {
    throw new Error(`${parameterFile} must be an array`);
  }

  const str = j.map(({ ParameterKey, ParameterValue }) => `"${ParameterKey}=${ParameterValue}"`);

  return str.join(' ');
};

module.exports = {
  awsParameterFileToString,
};
