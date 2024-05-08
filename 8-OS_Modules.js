//* There are different types of builtin modules in Node such as 1.OS, 2.Path, 3.File System(FS), 4. HTTP

//! OS MEthods- 1.userInfo()  2.type()  3.totalmem()  4.freemem()  5.release()  6.uptime()

const os = require('os');
//? Here we are requiring the Built in module OS, which we are allocating in the var 'os'.
//? This if used with diff methods will give us useful info about our OS.

//? Info about current user
const user = os.userInfo();
console.log(user);

//? Method returns the system uptime in sec
console.log(`The system uptime is ${os.uptime()} seconds.`); //? Gives from when the OS is running

const currentOS = {
	name: os.type(), //? Gives the name of the OS
	release: os.release(), //?Gievs the release of the OS
	totalMem: os.totalmem(), //? Gives the totalMem of the OS
	freeMem: os.freemem()
};
console.log(currentOS);
