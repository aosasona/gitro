#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("npm install --save mongoose express body-parser && npm install --save-dev nodemon concurrently");
console.log('Mongoose, ExpressJS, Body-parser, Nodemon and concurrently have all been installed!');