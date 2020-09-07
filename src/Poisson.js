/* jshint node: true */
"use strict";
const Probability = require("./Probability.js");
/**
 * @class The Famous Poisson Distribution! <br/>
 *  Expresses the probability of a given number of events occurring in a fixed interval of time.
 *
 */
class Poisson extends Probability {
  constructor() {
    super();
    this.evAvg = null;
  }
  /**
   * Gets the average event for the instance
   * @method
   * @return {number} Average event for the instance
   */
  getEvAvg() {
    return this.evAvg;
  }

  /**
   * Sets the average event for the instance
   * @method
   * @param {number} ev - The average number of times an event occurs in a given time
   */
  setEvAvg(ev) {
    this.evAvg = ev;
  }


  /**
   * Poisson Distribution Probability Mass Function
   * @method
   * @param {array} ev - The set of events for the distribution 
   * @param {number} prec - The precision for returning the probability calculations
   * @return {array} Returns an array of floats containing the calculations of probabilities over kth iterations.
   */
  pmf(ev, prec = 3) {
    if (typeof ev !== "object")
        throw "pmf() parameter ev must be an array";

    let sAvg = this.getSetAvg(ev);
    let k = ev.length;
    if (this.evAvg === null) this.setEvAvg(sAvg); //we'll use this later
    var arr = [];
    for (var i = 0; i < k; i++) {
      let f = (Math.pow(sAvg, i) * Math.pow(this.e, -sAvg)) / this.factorial(i);
      let prob = parseFloat(f.toPrecision(prec));
      arr.push(prob);
    }
    return arr;
  }

  /**
   * Returns the Fisher Information for the current Poisson Distribution
   * @method
   * @return {number} Returns Fisher Information
   */
  fisher() {
    return 1 / this.evAvg;
  }
  /**
   * Returns Returns the mean of the distribution
   * @method
   * @return {number} Returns the mean of the distribution
   */
  mean() {
    return this.evAvg;
  }
    /**
   * Returns the skewness of the distribution
   * @method
   * @return {number} Returns the skewness of the distribution
   */
  skewness() {
    return Math.pow(this.evAvg,-(1/2));
  }
    /**
   * Returns the kurtosis of the distribution
   * @method
   * @return {number} Returns the skewness of the distribution
   */
  kurtosis() {
    return Math.pow(this.evAvg,-1);
  }
      /**
   * Returns the variance of the distribution
   * @method
   * @return {number} Returns the variance of the distribution
   */
  variance() {
    return this.evAvg;
  }
}
module.exports = Poisson;
