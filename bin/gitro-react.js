#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("npm install --save react react-dom react-router-dom@5");
console.log('ReactDOM and React Router have been installed');