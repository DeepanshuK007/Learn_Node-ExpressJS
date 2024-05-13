//* npm- global command, comes with node.
//* npm --version/ npm -v

//* local dependency - use it only in this particular project
//* npm i <packageName>

//* global dependency - use it in any project
//* npm install -g <packageName>

//* package.json - manifest file (stores important info about project/package)
//* manual approach (create package.json in the root, create properties etc)
//* npm init (step by step, press enter to skip)
//* npm init -y (everything default)

//* If u want to publish the package.json the name has to be unique.

//* Now as u install a lib in your project, it gets registered as a dependency object in package.json with the lib version.
//* Along withtit gets installed the node_modules folder which has all the imp codes of the lodash lib
//* lodash- it is a utility lib, and a package-lock.json

const _ = require('lodash');
//? To request for the use of installed node_modules we have a special symbol '_'

const items = [ 1, [ 2, [ 3, [ 4 ] ] ] ];
const newItems = _.flattenDeep(items);
//? This flattenDeep method is used to give back a flat array.
console.log(newItems);
console.log('Hello');

//* dev dependencies
//! command - npm i nodemon -D/--save-dev
//? Now we are adding nodemon or other such libs and installing those as dev dependencies because we won tbe using it in production purposes thus dev dependencies includes packages such as for testing purposes, formating etc.

//* Some times npm (start) works after changing the script and sometime sits npm run (dev)
//? Now the use of nodemon is that it watches your application at compile time when u save it thus u dont have to again and again run the command npm start.

//! To uninstall a node_module- 'npm uninstall (bootstrap)'
