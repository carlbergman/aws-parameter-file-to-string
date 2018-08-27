const { expect } = require('chai');
const { execFile } = require('child_process');

describe('Transform AWS parameter file to string', () => {
  it('Should transform parameter file', (done) => {
    execFile(
      './src/cli.js',
      [
        '-i',
        './test/test-files/example-params.json',
      ],
      (error, stdout) => {
        expect(error).to.equal(null);
        expect(stdout).to.equal('Foo=someValue\n');
        done();
      },
    );
  });

  it('Should throw if file is invalid json', (done) => {
    execFile(
      './src/cli.js',
      [
        '-i',
        './test/test-files/example-params-invalid.json',
      ],
      (error, stdout, stderr) => {
        expect(error).to.not.equal(null);
        expect(stderr).to.equal('./test/test-files/example-params-invalid.json is not a valid JSON file\n');
        done();
      },
    );
  });

  it('Should throw if file is not an array', (done) => {
    execFile(
      './src/cli.js',
      [
        '-i',
        './test/test-files/example-params-no-array.json',
      ],
      (error, stdout, stderr) => {
        expect(error).to.not.equal(null);
        expect(stderr).to.equal('./test/test-files/example-params-no-array.json must be an array\n');
        done();
      },
    );
  });

  describe('Parameters', () => {
    it('Input file should be mandatory', (done) => {
      execFile(
        './src/cli.js',
        [],
        (error, stdout) => {
          expect(error).to.not.equal(null);
          expect(stdout).to.equal(
            'Missing "input" argument.\nTry "--help" for more information.\n',
          );
          done();
        },
      );
    });
  });
});
