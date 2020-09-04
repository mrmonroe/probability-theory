const {Poisson} = require("../index.js")

let p = new Poisson()
test('runs poisson distribution for 2.5 fo 7 factorial to get array response', () => {
  expect(p.pmf(2.5,7)).toStrictEqual(
        [0.0821, 0.205, 0.257, 0.214, 0.134, 0.0668, 0.0278]
  );    
});
test('set pmf and get EV AVG from first parameter', () => {
    expect(p.getEvAvg()).toBe(2.5); 
  });
test('Set EV Avg to 5', () => {
    p.setEvAvg(5);
    expect(p.getEvAvg()).toBe(5);    
  });
test('Set Fisher to be 1/5', () => {
    expect(p.fisher()).toBe(1/5);    
  });
test('Returns the mean of the Poisson distribution', () => {
    expect(p.mean()).toBe(5);    
  });
test('Returns the skewness of the Poisson distribution', () => {
   let d =  Math.pow(5,-(1/2));
    expect(p.skewness()).toBe(d);    
  });
test('Returns the kurtosis of the Poisson distribution', () => {
let d =  Math.pow(5,-1);
    expect(p.kurtosis()).toBe(d);    
});
test('Returns the variance of the Poisson distribution', () => {
        expect(p.variance()).toBe(5);    
    });
