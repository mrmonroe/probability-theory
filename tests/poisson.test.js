const {Poisson} = require("../index.js");


let p = new Poisson();


test('runs poisson distribution for 2.5 fo 7 factorial to get array response', () => {
    let evset = [10.5,1,1,1,1,1,1]
  expect(p.pmf(evset)).toStrictEqual(
        [0.0947, 0.223, 0.263, 0.207, 0.122, 0.0574, 0.0226 ]
  );    
});
test('set pmf and get EV AVG from first parameter', () => {
    expect(p.getEvAvg()).toBe(2.357142857142857); 
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
