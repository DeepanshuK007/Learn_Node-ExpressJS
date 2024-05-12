const http = require('http');

const server = http.createServer((req, res) => {
	//? Here we are discussing the first func of http that is createServer which is a callback func and takes two arguments in it as res for the incoming REQUEST from the browser and res for RESPONSE what we are sending back.

	if (req.url == '/') {
		//? Single forward slash means Home.
		res.end('Welcome to our Home Page.');
	}
	if (req.url == '/about') {
		res.end('Here is our short history');
	}
	res.end(` 
    <h1> Oops! </h1> 
    <p> We cant find what u are looking for </p> 
    <a href= '/'> Back Home </a>  `);
	//? If none of the if condition satisfies then we have our end() which shows we can also pass html tags, links in it.

	// console.log(req); //? Here somethimes to get the req we need to refresh the browser.
	//? Then we get a load of useful data
	// res.write();
	// res.end();
	//? Once we have sent our resonse, we wana end our request thus .end()
});

server.listen(5000);
//? listen() method provides a port for our server to listen to which can be an arbitary value.
