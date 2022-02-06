#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("git pull && git push --set-upstream origin master");