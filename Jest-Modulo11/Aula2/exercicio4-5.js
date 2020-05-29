// Dentro de um mesmo arquivo, crie três funções.
// A primeira deve receber uma string e retorná-la em caixa alta.
// A segunda deve também receber uma string e retornar só a primeira letra.
// A terceira deve receber duas strings e concatená-las.

function firstFunction(str) {
  return str.toUpperCase();
};

function secondFunction(str) {
  return (str.split(''))[0];
}

function thirdFunction(strOne, strTwo) {
  return strOne.concat(strTwo);
}

module.exports = { firstFunction, secondFunction, thirdFunction }