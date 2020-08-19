const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:
function addAllnumbers(arr) {
  sum = 0
  for (let i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
