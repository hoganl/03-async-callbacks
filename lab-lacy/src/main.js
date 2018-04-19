'use strict';

const reader = require('./lib/reader');

const mobyDickPath = `${__dirname}/data/moby-dick.txt`;
const sherlockPath = `${__dirname}/data/sherlock.txt`;
const ulyssesPath = `${__dirname}/data/ulysses.txt`;

const files = [mobyDickPath, sherlockPath, ulyssesPath];

const printCharacters = () => {
};

const readFileArray = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];
  try {
    return reader.readFirstBook(currentFilePath, (error, file) => {
      if (error) {
        throw error;
      }
      printCharacters(file);
      readFileArray(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

readFileArray(files, 0, () => console.log('We have read all the files'));
