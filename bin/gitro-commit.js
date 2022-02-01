#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("git add . && git commit -m 'Updated with Gitro 1.1.0'");