const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('parameters must be numbers');
  return a + b;
}

const myIndexOf = (arr, item) => {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) searchedIndex = i;
  }
  return searchedIndex;
}

const mySum = (arr) => {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

const myRemove = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) newArr.push(arr[i]);
  }
  return newArr;
}

const myRemoveWithoutCopy = (arr, item) => {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
}

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const thereIs = '';

function thereIsTwo() {}

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

const isAbove = (num1, num2) => num1 > num2;

module.exports = { sum, myIndexOf, mySum, myRemove, myRemoveWithoutCopy, myFizzBuzz, thereIs, thereIsTwo, obj1, obj2, obj3, isAbove }

