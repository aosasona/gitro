#! /usr/bin/env node
var shell = require("shelljs");

console.log(`Available commands: 
gcom : Adds and commits ALL files,
gpush : Pulls from remote server to prevent issues and pushes ALL committed/staged files,
gcap : Runs gcom and gpush commands,
gbuild : Compiles TailwindCSS,
gtail : Installs TailwindCSS and its dependencies, 
greact : Installs React, ReactDOM and React-router-dom@5,
gexpress: Installs ExpressJS and other useful dependencies for development,
gmern : Install Express, React and their dependencies for a basic MERN app, 
gitro : Runs gbuild, gcom and gpush all at once`);