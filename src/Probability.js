/*jslint node: true */
"use strict";
/**
 * @class
 * A base class for helper functions and constants
 */
class Probability {
  /**
   * @constructor
   */
  constructor() {
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
}
module.exports = Probability;
