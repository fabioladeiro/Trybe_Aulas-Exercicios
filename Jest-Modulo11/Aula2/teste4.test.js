// Faça o mock do arquivo.
// Faça uma nova implementação para a primeira função,
// mas agora ela deve retornar a string em caixa baixa.
// Para a segunda função, uma nova implementação deve retornar 
//a última letra de uma string. A terceira deve receber três strings e concatená-las.

const exercicio4 = require('./exercicio4-5');
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
  test('Testando secondFunction - recebe str e retorna a última letra', () => {
    exercicio4.secondFunction.mockImplementation((str) => str.split('')[str.length-1]);
    exercicio4.secondFunction('Love is Blind');

    expect(exercicio4.secondFunction).toHaveBeenCalled();
    expect(exercicio4.secondFunction).toHaveBeenCalledTimes(1);
    expect(exercicio4.secondFunction).toHaveBeenCalledWith('Love is Blind');
    expect(exercicio4.secondFunction('Love is Blind')).toEqual('d');
  });
  test('Testando thirdFunction - recebe str e retorna a última letra', () => {
    exercicio4.thirdFunction.mockImplementation((str1, str2, str3) => str1.concat(str2, str3));
    exercicio4.thirdFunction('Love','is','blind');

    expect(exercicio4.thirdFunction).toHaveBeenCalled();
    expect(exercicio4.thirdFunction).toHaveBeenCalledTimes(1);
    expect(exercicio4.thirdFunction).toHaveBeenCalledWith('Love','is','blind');
    expect(exercicio4.thirdFunction('Love','is','blind')).toEqual('Loveisblind');
  });
});