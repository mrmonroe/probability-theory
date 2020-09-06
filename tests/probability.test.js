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
test("toFraction .25 to return 1,4 array", () => {
    expect(p.toFraction(.25)).toStrictEqual([1,4]);
  });

test("calculate odds return 1:3  winning string ratio", () => {
    
    expect(p.odds(.25, "win" , true )).toBe("1:3");
  });
  test("calculate odds return 3:1 losing string ratio", () => {
    
    expect(p.odds(.25, "lose" , true )).toBe("3:1");
  });
  test("calculate odds return 1:3 array ", () => {
    
    expect(p.odds(.25, "win")).toStrictEqual([1,3]);
  });
  test("calculate odds return 3:1 array", () => {
    
    expect(p.odds(.25, "lose")).toStrictEqual([3,1]);
  });
