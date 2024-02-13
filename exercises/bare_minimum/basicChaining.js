/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promises = require('./promisification.js');
var pluckAndCode = require('./promiseConstructor.js')
/*   return the first promise and chain together its successful data
(1)  first promise is the pluckFirstLineFromFileAsync in pluck and code //gives the username (first line)
(2) then use promises.getGitHubProfileAsync(username)
(3) then write the JSON response to writeFilePath with fs but promisify it first
*/
var writeFile = Promise.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return pluckAndCode.pluckFirstLineFromFileAsync(readFilePath)
  .then((userName) => {
    return promises.getGitHubProfileAsync(userName)
  })
  .then((profile) => {
    return writeFile(writeFilePath, JSON.stringify(profile))
    })
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
