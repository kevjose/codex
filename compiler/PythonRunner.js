const { spawn } = require('child_process');
const Runner = require('./Runner');

class PythonRunner extends Runner {
  defaultFile() {
    return this.defaultfile;
  }

  constructor() {
    super();
    this.defaultfile = 'Hello.py';
  }

  run(file, directory, filename, extension, callback) {
    if (extension.toLowerCase() !== '.py') {
      console.log(`${file} is not a python file.`);
    }
    this.execute(file, directory, callback);
  }

  execute(file, directory, callback) {
    // set working directory for child_process
    const options = { cwd: directory };
    const argsRun = [];
    argsRun[0] = file;
    console.log(`options: ${options}`);
    console.log(`argsRun: ${argsRun}`);
    const executor = spawn('flake8', argsRun, options);
    let cb_sent = false;
    executor.stdout.on('data', output => {
      console.log(String(output));
      if (cb_sent === false) {
        cb_sent = true;
        callback('0', String(output)); // 0, no error
      }
    });
    executor.stderr.on('data', output => {
      console.log(`stderr: ${String(output)}`);
      if (cb_sent === false) {
        cb_sent = true;
        callback('2', String(output)); // 2, execution failure
      }
    });
    executor.on('close', output => {
      this.log(`stdout: ${output}`);
      if (cb_sent === false) {
        cb_sent = true;
        callback('0', String('No code problems')); // 0, no error
      }
    });
  }

  log(message) {
    console.log(message);
  }
}

module.exports = PythonRunner;
