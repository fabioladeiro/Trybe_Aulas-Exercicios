// Crie uma função que gere um número aleatório entre 0 e 100.

function newNumber() {
  return Math.floor(Math.random() * 100)
}

console.log(newNumber())

module.exports = { newNumber }  