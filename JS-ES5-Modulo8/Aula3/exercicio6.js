const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
const numFizzBuzz = myFizzBuzz(15);
assert.strictEqual(numFizzBuzz,'fizzbuzz');
//Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
const numFizz = myFizzBuzz(9);
assert.strictEqual(numFizz,'fizz');
//Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
const numBuzz = myFizzBuzz(10);
assert.strictEqual(numBuzz,'buzz');
//Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
const num = myFizzBuzz(7);
assert.strictEqual(num,7);
//Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
const nan = myFizzBuzz('NaN');
assert.strictEqual(nan,false);
