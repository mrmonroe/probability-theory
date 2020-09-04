/*jslint node: true */
"use strict";
class Probability {
  constructor() {
    this.e = 2.7182818284590452353602874;
  }

  poisson(ev, k, prec = 3) {
    var arr = [];
    for (var i = 0; i < k; i++) {
      let f = (Math.pow(ev, i) * Math.pow(this.e, -ev)) / this.factorial(i);
      arr.push(parseFloat(f.toPrecision(prec)));
    }
    return arr;
  }

  factorial(n) { //n!
    var ans = 1;
    for (var i = 2; i <= n; i++) ans = ans * i;
    return ans;
  }
}
module.exports = Probability;
