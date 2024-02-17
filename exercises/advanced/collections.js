/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */
// reads each file in file paths array
// then plucks the first line using pluckFirstLineFromFileAsync from promise constructor
// add then using rs.writeFile promise add them in with \n between them
var pluck = require('../bare_minimum/promiseConstructor.js');
var fs = require('fs');
var Promise = require('bluebird');
var writeFile = Promise.promisify(fs.writeFile);
var combineFirstLineOfManyFiles = function(filePaths, writePath) {

};

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};