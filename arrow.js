function doubleIt1(num) {
  return num * 2;
}
const doubleIt2 = function(num) {
  return num * 2;
};
const doubleIt3 = function doubleIt(num) {
  return num * 2;
};
const doubleIt4 = num => num * 2; //this is arrow function of ES6 Version
const resultDouble = doubleIt4(50);

const add = (x, y) => x + y;
const resultAdd = add(50, 500);

const giveFixedNumber = () => 999;
const resultNumber = giveFixedNumber();

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result; //return use for more variable
};
const result = doMath(9, 5);
console.log(result);
