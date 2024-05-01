//* Modules

const John = 'John';
const Aman = 'Aman Jain';

const sayHi = (name) => {
	console.log(`Hello there, ${name}`); //? ${} is called template literal
};

// sayHi('Deep'); //Now in the above arrow func we can also pass a string or a var as the argument
// sayHi(Aman);

//* CommonJS, every file is module (by default)
//* Modules- Encapsulated Code (only share minimum)

const names = require('./4-Names');
//? When fetching the files always start with ./

const sayHi = require('./5-Utils');

console.log(names); //? Here we will recieve the obj exported from the 4-Names module.

sayHi('Deep');
sayHi(names.Aman); //? As here we are receiving the Aman var in names var thus names.Aman

const data = require('./6-Alternative_Flavour');
console.log(data); //arr of objects
console.log(data.singlePerson); //name: "Deep"

require('./7-mind_Granade');
//? This code will also print the result without allocating the values to a const ad with EXPORTING THE FILE REQUIRED
