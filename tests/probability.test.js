const { Probability } = require("../index.js");

let p = new Probability();

test("runs factorial 4 to return 24", () => {
  expect(p.factorial(4)).toBe(24);
});

test("returns eulers constant", () => {
  expect(p.euler()).toBe(2.7182818284590452353602874);
});

test("getSetAvg returns the average of the set", () => {
    
  expect(p.getSetAvg([1,2,3])).toBe(2);
});
