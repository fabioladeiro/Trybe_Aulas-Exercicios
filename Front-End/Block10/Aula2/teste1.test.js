// Crie uma função que gere um número aleatório entre 0 e 100.
// Você irá criar também os testes para essa função.
// Utilizando o mock, defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const exercicio1 = require('./exercicio1-2-3');

test('Testando newNumber', () => {
  exercicio1.newNumber = jest.fn().mockReturnValue(10);

  exercicio1.newNumber();
  expect(exercicio1.newNumber).toHaveBeenCalled();
  expect(exercicio1.newNumber).toHaveBeenCalledTimes(1);
  expect(exercicio1.newNumber()).toBe(10);
});