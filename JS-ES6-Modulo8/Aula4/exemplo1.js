function validaArray(arr) {
  let contador = 0;
  for (let i=0; i<arr.length; i++){
    if (arr[i]%3 == 0 || arr[i]%5 == 0 || arr[i]%7 == 0 || arr[i]%11 == 0) contador ++;
  }
  if (contador > 0) return ('O array de entrada possui múltiplos de 3, 5, 7 e 11');
  else return ('O array de entrada NÃO possui múltiplos de 3, 5, 7 e 11');
}

const assert = require('assert');

assert.strictEqual(typeof (validaArray),'function');
assert.strictEqual(validaArray([1,2,4,16]),'O array de entrada NÃO possui múltiplos de 3, 5, 7 e 11');
assert.strictEqual(validaArray([1,2,3,5,11,12]),'O array de entrada possui múltiplos de 3, 5, 7 e 11');