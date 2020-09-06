/* jshint node: true */
"use strict";
const helps = require("./helpers.js");
/**
 * @class
 * A base class for helper functions and constants
 */
class Probability {
  /**
   * @constructor
   */
  constructor() {
    this.W = {};
    this.e = 2.7182818284590452353602874;
  }
  /**
   * Returns Euler's constant at 26 digits
   * @method
   * @return {number} Euler's constant e = 2.71828...
   */
  euler() {
    return this.e;
  }
  /**
   * Returns average of the sample space if the sample space contains only numbers
   * @method
   * @param {array} arr - The array containing the Sample space set
   * @throws getSetAvg() parameter must be an array
   * @throws getSetAvg() parameter must be an array of numbers to use this function
   * @return {number} - Average of the set
   *
   */
  getSetAvg(arr) {
    if (typeof arr !== "object")
      throw "getSetAvg() parameter arr must be an array";
    let n = arr.length;
    let sum = 0;
    for (var i = 0; i < n; i++) {
      if (typeof arr[i] !== "number")
        throw "getSetAvg() parameter must be an array of numbers to use this function";
      sum += arr[i];
    }
    return sum / n;
  }
  /**
   * Returns the odds based on the chance that an event occurs versus that it won't. <br/>
   * Formula is p / (1 - p).
   * @method
   * @param {number} chance - A percentage that an event will occur
   * @param {boolean} isString - If set to true will return a string representation of the odds as a ratio.
   * @param {string} winLose - Must be "win" or "lose". If 25% chance of winning then odds are 1:3, if losing, 3:1.
   * @throws odds() chance parameter must be a number
   * @return {array|string} - Odds of the event
   *
   */
  odds(chance, winLose, isString = false) {
    if (typeof chance !== "number")
      throw "odds() chance parameter must be a number";

    if (typeof winLose !== "string" || ["win", "lose"].indexOf(winLose) < 0)
      throw "odds() winLose parameter must be a string and equal either 'win' or 'lose'";
    let odds = chance / (1 - chance);
    let frac = this.toFraction(odds);
    if (isString) {
      if (winLose === "win") {
        frac = `${frac[0]}:${frac[1]}`;
      }
      if (winLose === "lose") {
        frac = `${frac[1]}:${frac[0]}`;
      }
    } else {
      if (winLose === "lose") {
        frac = [frac[1], frac[0]];
      }
    }

    return frac;
  }
  /**
   * Returns a calculated factorial number of a given number n!.
   * @method
   * @param {number} n - The factorial number. let n = 4; 4! = 1 * 2 * 3 * 4 = 24
   * @return {number} The calculated factorial
   */
  factorial(n) {
    var ans = 1;
    for (var i = 2; i <= n; i++) ans = ans * i;
    return ans;
  }
  /**
   * Returns an array or string with numerator and denominator.
   * @method
   * @param {number} dec - The Decimal to return a fraction for.
   * @return {array|string}  The calculated factorial
   */
  toFraction(dec) {
    var is_neg = dec < 0;
    dec = Math.abs(dec);
    var done = false;

    var n1 = 0,
      d1 = 1,
      n2 = 1,
      d2 = 0,
      n = 0,
      q = dec,
      epsilon = 1e-13;
    while (!done) {
      n++;
      if (n > 10000) {
        done = true;
      }
      var a = parseInt(q);
      var num = n1 + a * n2;
      var den = d1 + a * d2;
      var e = q - a;
      if (e < epsilon) {
        done = true;
      }
      q = 1 / e;
      n1 = n2;
      d1 = d2;
      n2 = num;
      d2 = den;
      if (Math.abs(num / den - dec) < epsilon || n > 30) {
        done = true;
      }
    }
/* jshint ignore:start */
    return [is_neg ? -num : num, den];
    /* jshint ignore:end */
  }
}
module.exports = Probability;
