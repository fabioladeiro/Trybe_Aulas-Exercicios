// Ainda com a mesma função do primeiro exercício, utilizando o mock,
// cria uma nova implementação que receba três parâmetros e retorne sua multiplicação.
// Após fazer os devidos testes para ela, resete sua implementação e crie uma nova que
// recebe um parâmetro e retorne seu dobro. Faça os testes necessários.

const exercicio3 = require('./exercicio1-2-3');

test('Testando newNumber', () => {
  exercicio3.newNumber = jest.fn().mockImplementation((a,b,c) => a*b*c);
  exercicio3.newNumber(1,2,3);

  expect(exercicio3.newNumber).toHaveBeenCalled();
  expect(exercicio3.newNumber).toHaveBeenCalledTimes(1);
  expect(exercicio3.newNumber).toHaveBeenCalledWith(1,2,3);
  expect(exercicio3.newNumber(1,2,3)).toBe(6);

  exercicio3.newNumber.mockReset();

  exercicio3.newNumber = jest.fn().mockImplementation((a) => a*2);
  exercicio3.newNumber(2);

  expect(exercicio3.newNumber).toHaveBeenCalled();
  expect(exercicio3.newNumber).toHaveBeenCalledTimes(1);
  expect(exercicio3.newNumber).toHaveBeenCalledWith(2);
  expect(exercicio3.newNumber(2)).toBe(4);
});
