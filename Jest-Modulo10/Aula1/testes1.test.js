const exercicio = require('./exercicio1')

describe('sum', () => {
  test('soma de 4 e 5 é igual a 9', () => expect(exercicio.sum(4, 5)).toBe(9));
  test('Erro quando o parâmetro passado for uma string', () => {
    expect(() => exercicio.sum(4,'5')).toThrow('parameters must be numbers');
  });
  test('soma de 0 e 0 é igual a 0', () => expect(exercicio.sum(0, 0)).toBe(0));
});

describe('myIndexOf', () => {
  test('Índice do numero 3 no array [1,2,3,4] é 2', () => {
    expect(exercicio.myIndexOf([1,2,3,4],3)).toBe(2);
  });
  test('Índice do numero 3 no array [1,2,3,4] é 2', () => {
    expect(exercicio.myIndexOf([1,2,3,4],5)).toBe(-1);
  });
});

describe('mySum', () => {
  test('A soma do valores do array [1,2,3,4] é 10', () => {
    expect(exercicio.mySum([1,2,3,4])).toBe(10);
  });
  test('A soma do valores do array [1,-2,-3,4] é 0', () => {
    expect(exercicio.mySum([1,-2,-3,4])).toBe(0);
  });
});

describe('myRemove', () => {
  test('O array [1,2,3,4] sem o valor 3 é [1,2,4]', () => {
    expect(exercicio.myRemove([1,2,3,4],3)).toEqual([1,2,4]);
  });
  test('O array [1,2,3,4] sem o valor 3 é [1,2,4]', () => {
    expect(exercicio.myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4]);
  });
});

describe('myRemoveWithoutCopy', () => {
  test('O array [1,2,3,4] sem o valor 3 é [1,2,4]', () => {
    expect(exercicio.myRemoveWithoutCopy([1,2,3,4],3)).toEqual([1,2,4]);
  });
  test('O array [1,2,3,4] sem o valor 3 é [1,2,4]', () => {
    expect(exercicio.myRemoveWithoutCopy([1,2,3,4],3)).not.toEqual([1,2,3,4]);
  });
  test('O array [1,2,3,4] sem o valor 5 é [1,2,3,4]', () => {
    expect(exercicio.myRemoveWithoutCopy([1,2,3,4],5)).toEqual([1,2,3,4]);
  });
});

describe('myFizzBuzz', () => {
  test('Quando o parametro é um número divisível por 3 e 5, o retorno será fizzbuzz', () => {
    expect(exercicio.myFizzBuzz(15)).toEqual('fizzbuzz');
  });
  test('Quando o parametro é um número divisível por 3, o retorno será fizz', () => {
    expect(exercicio.myFizzBuzz(9)).toEqual('fizz');
  });
  test('Quando o parametro é um número divisível por 5, o retorno será buzz', () => {
    expect(exercicio.myFizzBuzz(10)).toEqual('buzz');
  });
  test('Quando o parametro é um número não divisível por 7 ou 5, o retorno será o próprio número', () => {
    expect(exercicio.myFizzBuzz(7)).toEqual(7);
  });
  test('Quando o parametro não é um número, o retorno será false', () => {
    expect(exercicio.myFizzBuzz(NaN)).toBeFalsy();
  });
});

describe('thereIs', () => {
  test('tipo da variável não é indefinido', () => {
    expect(typeof (exercicio.thereIs)).not.toBe('undefined');
  });
});

describe('thereIsTwo', () => {
  test('thereIsTwo é um função', () => {
    expect(typeof (exercicio.thereIsTwo)).toBe('function');
  });
});

test('comparação de objetos', () => {
  expect(exercicio.obj1).toEqual(exercicio.obj2);
  expect(exercicio.obj1).not.toEqual(exercicio.obj3);
});

describe('isAbove', () => {
  test('5 não é maior do que 9', () => {
    expect(exercicio.isAbove(5,9)).toBeFalsy();
  });
  test('9 é maior do que 5', () => {
    expect(exercicio.isAbove(9,5)).toBeTruthy();
  });
});