const { readFile, writeFile, read } = require('fs');

console.log('Start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
	//? here too the syntax for async readFile is first the path of the file and then utf code, then the two args on a callback func err if any we would catch it and the result we qwould print of all is good.
	if (err) {
		console.log(err);
		return;
	}
	console.log(result);
});

//* ----------------------writeFile---------------------------------

readFile('./content/first.txt', 'utf-8', (err, result) => {
	//? Reading data form the first file and storing the result in a var
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	readFile('./content/secound.txt', 'utf-8', (err, result) => {
		//? Reading data form the first file and storing the result in a var
		if (err) {
			console.log(err);
			return;
		}
		const second = result;
		writeFile(
			'./content/result-async.txt',
			`Here is th eresult in an async way: ${first}, ${second}`, //? Writing data into a third created file and consoling log the data
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log('done with this task');
			}
		);
	});
});
console.log('Start of the next task'); //? Here this will get printed first before the previous console as it is time taking process and we have kept it async and thus wont wait for the previous task to finish

//? We can also avoid this above lengthy code by using Promises and async-await.
