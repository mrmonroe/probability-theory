const { Probability } = require("../index.js");

let p = new Probability();

test("runs factorial 4 to return 24", () => {
  expect(p.factorial(4)).toBe(24);
});

test("returns eulers constant", () => {
  expect(p.euler()).toBe(2.7182818284590452353602874);
});

test("getSetAvg returns the average of the set", () => {
  expect(p.getSetAvg([1, 2, 3])).toBe(2);
});
test("toFraction .25 to return 1,4 array", () => {
  expect(p.toFraction(0.25)).toStrictEqual([1, 4]);
});

test("calculate odds return 1:3  winning string ratio", () => {
  expect(p.odds(0.25, "win", true)).toBe("1:3");
});
test("calculate odds return 3:1 losing string ratio", () => {
  expect(p.odds(0.25, "lose", true)).toBe("3:1");
});
test("calculate odds return 1:3 array ", () => {
  expect(p.odds(0.25, "win")).toStrictEqual([1, 3]);
});
test("calculate odds return 3:1 array", () => {
  expect(p.odds(0.25, "lose")).toStrictEqual([3, 1]);
});

test("marginal() should return .5", () => {
  expect(p.marginal([1, 2, 3, 4, 5, 6], [1,4,6])).toBe(0.5);
});

test("complement() should return .5", () => {
    expect(p.complement([1, 2, 3, 4, 5, 6], [1,3,5])).toBe(0.5);
  });
test("complement() should return [1,2]", () => {
    expect(p.complement([1, 2, 3, 4, 5, 6], [1,3,5], true)).toStrictEqual([1,2]);
  });
test("complement() string test [1,2]", () => {
  expect(p.complement(
    ["yellow", "red", "green", "blue", "black", "brown"], 
    ["blue","red","brown"], 
    true)).toStrictEqual([1,2]);
});
test("intersection() of two events", () => {
  expect(p.intersection([1,2,3,4,5,6],[3,4,5],[3,4,5])).toBe(.25);
});
test("intersection() of two events shoulde return [1,4]", () => {
  expect(p.intersection([1,2,3,4,5,6],[3,4,5],[3,4,5], true)).toStrictEqual([1,4]);
});
test("union() of two events should return 0.4166666666666667 ", () => {
  expect(p.intersection([1,2,3,4,5,6],[3,4,5],[3,4,5,6,1])).toBe(.4166666666666667);
});

test("union() of two events should return [] ", () => {
  expect(p.intersection([1,2,3,4,5,6],[3,4,5],[3,4,5,6,1],true)).toStrictEqual([5,12]);
});

test("intersection probability will return .24", () => {
  expect(p.intersectionByProb(.60,.40)).toBe(.24);
});
test("union probability will return .60", () => {
  expect(p.unionByProb(.40,.20)).toBe(.32);
});
  
