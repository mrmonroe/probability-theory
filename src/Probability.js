/* jshint node: true */
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
   * Returns probability of one set occuring against the sample space
   * @method
   * @param {array} sample - The sample space
   * @param {array} events - The event set
   * @param {array} fraction - If set to true returns probability as array of numerator and denominator
   * @return {number} The calculated probability
   */
  marginal(sample, events, fraction = false) {
    if (typeof sample !== "object" || typeof events !== "object")
      throw "only accepts arrays as parameters";
    this._inSpace(sample, events);
    let ans = events.length / sample.length;
    return ans;
  }
  /**
   * Returns complement probability of a set occuring against the sample space. Formula is: P(D) = 1-P(Dc)
   * @method
   * @param {array} sample - The sample space
   * @param {array} events - The event set
   * @param {boolean} fraction - If set to true then return an array of numerator and denominator for probability.
   * @throws "only accepts arrays as parameters"
   * @thorws "event is not in the sample space"
   * @return {number} The calculated probability
   */
  complement(sample, events, fraction = false) {
    if (typeof sample !== "object" || typeof events !== "object")
      throw "only accepts arrays as parameters";
    let sampleLength = sample.length;
    for (let i = 0; i < events.length; i++) {
      //create complement set
      if (sample.indexOf(events[i]) > -1) {
        sample.splice(sample.indexOf(events[i]), 1);
      } else {
        throw `${events[i]} is not in the sample space`;
      }
    }
    let ans = sample.length / sampleLength;
    if (fraction) {
      ans = this.toFraction(ans);
    }
    return ans;
  }
  /**
   * Returns intersection probability of two events occuring against the sample space. Formula is: P(B)*P(A|B)
   * @method
   * @param {array} sample - The sample space
   * @param {array} eventA - The event set
   * @param {array} eventB - The event set
   * @param {boolean} fraction - If set to true then return an array of numerator and denominator for probability.
   * @throws "only accepts arrays as parameters"
   * @thorws "event is not in the sample space"
   * @return {number} The calculated probability
   */
  intersection(sample, eventA, eventB, fraction = false) {
    if (
      typeof sample !== "object" ||
      typeof eventA !== "object" ||
      typeof eventB !== "object"
    )
      throw "only accepts arrays as parameters";
    this._inSpace(sample, eventA);
    this._inSpace(sample, eventB);
    let pb = this.marginal(sample, eventB);
    let pa = this.marginal(sample, eventA);
    let ans = pb * pa;
    if (fraction) {
      ans = this.toFraction(ans);
    }
    return ans;
  }
  /**
   * Returns union probability of two events occuring against the sample space. Formula is: P(A)+P(B)-P(A⋂B)
   * @method
   * @param {array} sample - The sample space
   * @param {array} eventA - The event set
   * @param {array} eventB - The event set
   * @param {boolean} fraction - If set to true then return an array of numerator and denominator for probability.
   * @throws "only accepts arrays as parameters"
   * @thorws "event is not in the sample space"
   * @return {number} The calculated probability
   */
  union(sample, eventA, eventB, fraction = false) {
    if (
      typeof sample !== "object" ||
      typeof eventA !== "object" ||
      typeof eventB !== "object"
    )
      throw "only accepts arrays as parameters";
    this._inSpace(sample, eventA);
    this._inSpace(sample, eventB);
    let pb = this.marginal(sample, eventB);
    let pa = this.marginal(sample, eventA);
    let iPBA = this.intersection(sample, eventA, eventB);
    let ans = pa + pb - iPBA;
    if (fraction) {
      ans = this.toFraction(ans);
    }
    return ans;
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
  _inSpace(space, events) {
    for (let i = 0; i < events.length; i++) {
      if (space.indexOf(events[i]) < 0) {
        throw `${events[i]} is not in the sample space`;
      }
    }
  }
}
module.exports = Probability;
