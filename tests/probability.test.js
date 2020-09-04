const Probability = require("../index")

let p = new Probability()
test('runs poisson distribution for 2.5 fo 7 factorial to get array response', () => {
  expect(p.poisson(2.5, 7)).toStrictEqual(
        [0.0821, 0.205, 0.257, 0.214, 0.134, 0.0668, 0.0278]
  );


});

test('runs factorial 4 to return 24', () => {
    expect(p.factorial(4)).toBe(24);
  });