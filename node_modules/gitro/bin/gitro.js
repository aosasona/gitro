#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("gbuild && gcom && gpush");