const assert = require('assert');

// escreva a função wordLengths para passar nos testes abaixo:

function wordLengths(arr) {
  const arrFinal = [];
  for (let i=0; i<arr.length; i++){
    let contador = 0;
    let word = arr[i].split(", ");
    let string = word[0].split("");
    for (let y=0; y<string.length; y++) {
      contador ++;
    }
    arrFinal.push(contador);
  }
  return arrFinal;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
wordLengths(words);
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
