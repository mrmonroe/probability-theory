/*jslint node: true */
"use strict";
const {Poisson} = require("./index.js");

let p = new Poisson();

let result = p.pmf(20,30,5);
console.log(result);

