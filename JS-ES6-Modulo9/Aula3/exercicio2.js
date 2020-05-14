const assert = require('assert')

// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...arr) =>  {
  let sum = 0;
  arr.forEach(arr => sum += arr);
  return sum 
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
    