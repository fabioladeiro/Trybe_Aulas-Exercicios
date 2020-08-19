// Com a mesma função do exercício anterior, utilizando o mock,
// crie uma nova implementação que deve receber dois parâmetros e
// retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.
// Faça os testes necessários.

const exercicio2 = require('./exercicio1-2-3');

test('Testando newNumber', () => {
  exercicio2.newNumber = jest.fn().mockImplementation((a,b) => a/b);
  exercicio2.newNumber(4,2);

  expect(exercicio2.newNumber).toHaveBeenCalled();
  expect(exercicio2.newNumber).toHaveBeenCalledTimes(1);
  expect(exercicio2.newNumber).toHaveBeenCalledWith(4,2);
  expect(exercicio2.newNumber(4,2)).toBe(2);
});