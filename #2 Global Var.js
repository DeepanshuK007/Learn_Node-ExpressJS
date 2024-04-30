//* GLOBALS - NO WINDOW!!

//? __dirname - path to current directory
//? __filename - file name
//? require - func to use modules (CommonJS)
//? module - info about current module (file)
//? process - info about env where the program is being executed, imp bcuz when u deploy your API, it is  siting on a cloud platform such as Digital Ocean which is a diff env and based on that eny u can make changes in your app

console.log(__dirname); //This gives the foldet in which the data is stored
console.log(__filename); //This gives the path till the current file
console.log(module);
// console.log(process); // Gives the whole KUNDLI of the file

setInterval(() => {
	console.log('Hello World!');
}, 2000);
