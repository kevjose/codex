const path = require('path');
const FileApi = require('./FileApi');
const JavaScriptRunner = require('./JavaScriptRunner');
const PythonRunner = require('./PythonRunner');

function Factory() {
  this.createRunner = function createRunner(lang) {
    let runner;

    if (lang === 'javascript') {
      runner = new JavaScriptRunner();
    } else if (lang === 'python') {
      runner = new PythonRunner();
    }

    return runner;
  };
}

module.exports = {
  run(lang, code, res) {
    const factory = new Factory();
    const runner = factory.createRunner(lang.toLowerCase());

    const directory = path.join(__dirname, 'temp');
    const file = path.join(directory, runner.defaultFile());
    console.log(`file: ${file}`);
    const filename = path.parse(file).name; // main
    const extension = path.parse(file).ext; // .java
    console.log(`filename: ${filename}`);
    console.log(`extension: ${extension}`);

    FileApi.saveFile(file, code, () => {
      runner.run(file, directory, filename, extension, (status, message) => {
        const result = {
          status,
          message
        };
        res.end(JSON.stringify(result));
      });
    });
  }
};
