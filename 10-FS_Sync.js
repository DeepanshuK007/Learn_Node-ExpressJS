//? In case of File System Modules we can do it sync that is blocking or asyncronously that is non-blocking.
//? In cas eof Path modules we can get the diff types of paths but here we can get the actual data inside the file by providing their paths

const { readFileSync, writeFileSync } = require('fs');
console.log('Start');
// const fs = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
//? Syntax: readFileSync('file-path', 'unicode encoding standard')
const second = readFileSync('./content/secound.txt', 'utf-8');
console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' });
//? Here also the syntax is: ('file.path', `context`)
//? If u want to append the text at last then write {flag: `a`}

console.log('Done with the task');
console.log('Starting the next task');

//? Here all the logs get printed in order after completion of the previos task as this is Sync process.
//? Now even if the previous task is processor and time consuming then too the next one will wait for its completion and thus we use Async process.
