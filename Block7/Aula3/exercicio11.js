const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

//Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
const testFunction = isAbove(5,9);
const testFunction2 = isAbove(9,5);
assert.strictEqual(testFunction, false);
assert.strictEqual(testFunction2, true);
