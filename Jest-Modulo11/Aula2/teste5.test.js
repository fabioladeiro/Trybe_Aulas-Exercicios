// Utilizando as mesmas funções do exercício anterior,
// repita a implementação para a primeira função. Após repetir a implementação,
// restaure a implementação original e crie os testes necessários para validar.

const exercicio5 = require('./exercicio4-5');
jest.mock('./exercicio4-5');

describe('Testando as funções firstFunction e secondFunction', () => {
  test('Testando firstFunction - recebe str e retorna em caixa baixa', () => {
    exercicio4.firstFunction.mockImplementation((str) => str.toLowerCase());
    exercicio4.firstFunction('Love is Blind');

    expect(exercicio4.firstFunction).toHaveBeenCalled();
    expect(exercicio4.firstFunction).toHaveBeenCalledTimes(1);
    expect(exercicio4.firstFunction).toHaveBeenCalledWith('Love is Blind');
    expect(exercicio4.firstFunction('Love is Blind')).toEqual('love is blind');
  });
  test('Testando firstFunction - restaurando a implementação', () => {
    exercicio4.firstFunction.mockReset();
    exercicio4.firstFunction('Love is Blind');

    expect(exercicio4.firstFunction).toHaveBeenCalled();
    expect(exercicio4.firstFunction).toHaveBeenCalledTimes(1);
    expect(exercicio4.firstFunction).toHaveBeenCalledWith('Love is Blind');
    expect(exercicio4.firstFunction('Love is Blind')).toEqual('love is blind');
  });
});
