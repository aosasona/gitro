#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("npx tailwindcss -i ./src/style.css -o ./src/assets/main.css");
console.log('Gitro has finished compiling TailwindCSS at /src/assets/main.css');