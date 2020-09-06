const helps = require('./helpers.js');
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
  getSetAvg(arr){
    if (typeof arr !== "object")
        throw "getSetAvg() parameter must be an array";  
    let n = arr.length;
    let sum = 0;
    for(var i = 0; i < n; i++){
        if (typeof arr[i] !== "number")
        throw "getSetAvg() parameter must be an array of numbers to use this function";
        sum += arr[i]
    }
    return sum/n
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
