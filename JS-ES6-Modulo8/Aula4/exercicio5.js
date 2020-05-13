const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  const arr = [];

  for (const person in people) {
    let item = greeting + people[person];
    arr.push(item);
  }
  return arr;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter),result);
