'use strict';

const fs = require('fs');

const reader = module.exports = {};

reader.readFirstBook = (paths, callback) => {
  return fs.readFile(paths, (error, result) => {
    if (error) {
      throw error;
    }
    return callback(null, result.toString('utf8', 0));
  });
};
