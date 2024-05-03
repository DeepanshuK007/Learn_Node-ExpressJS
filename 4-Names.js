//local
const secret = 'Super Secret';

//share
const John = 'John';
const Aman = 'Aman Jain';

console.log(module);
//Now here when we run this we will get exports as an empty obj and whatever we dump in it we can access anywhere in the dir.
module.exports = { John, Aman };
//? As her u are exporting mul var thus in JSON brackets.
