const mkdirp = require('mkdirp');
const fs = require('fs');
const getDirName = require('path').dirname;

module.exports = {
  saveFile(file, code, callback) {
    // create parent directories if they doesn't exist.
    mkdirp(getDirName(file), err => {
      if (err) return callback(err);

      return fs.writeFile(file, code, err2 => {
        if (err2) {
          throw err2;
        }

        callback();
      });
    });
  }
};
