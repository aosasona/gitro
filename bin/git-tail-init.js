#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init");
console.log('Tailwindcss has been installed and initiated! Add: "./src/**/*.{js,jsx,ts,tsx}" to your newly generated config content');