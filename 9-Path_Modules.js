//! path Methods- sep()  2.join()  3.basename()  4.resolve

const path = require('path');
console.log(path.sep); //?returns '/'

const filePath = path.join('/content', 'subfolder', 'text.txt');
console.log(filePath); //?returns the path and connects the above passed args
const filePath1 = path.join('/content//', 'subfolder', 'text.txt');
console.log(filePath1); //returns the path and ignors the extra symbols

const base = path.basename(filePath);
console.log(base); //?returns the last file/folder connected to the above passed path
const base1 = path.basename(path.join('/content', 'subfolder', 'text.txt'));
console.log(base1); // returns text.txt
const base2 = path.basename('/content', 'subfolder', 'text.txt');
console.log(base); //returns diff val- 'content'

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute); //? Gives the path from the root level, here we also pass the dirname that is the current file we are in
//? We can use this resolve() method as we will be running our appilication in diff environments
