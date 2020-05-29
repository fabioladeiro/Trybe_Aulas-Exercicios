const exercicio = require('./exercicio');

// Escreva um teste que verifique a chamada do callback de uma função uppercase,
// que transforma as letras de uma palavra em letras maiúsculas.
// Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
describe('teste callback', () => {
  test('Testando uppercase', done => {
  exercicio.uppercase('name', (str) => {
    expect(str).toBe('NAME');
    done();
  });
});
});

// Utilizando a sintaxe de Promise,
// faça um teste que verifique o resultado da função getUserName para o caso em que o usuário
// é encontrado, e também um teste para o caso em que o usuário não é encontrado.
describe('teste promisse', () => {
  test('Verifica getUserName', () => {
    expect.assertions(1);
    return exercicio.getUserName(4).then((name) => {
      expect(name).toEqual('Mark');
    });
  });
  test('Verifica getUserName, testando o reject', () => {
    expect.assertions(1);
    return exercicio.getUserName(1).catch((error) => {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    });
  });
});

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
describe('test async/await', () => {
  test('Verifica getUserName', async () => {
    const testGetUser = await exercicio.getUserName(4);
    expect(testGetUser).toEqual('Mark');
  });
  test('Verifica getUserName, testando o reject', async () => {
    try {
      await exercicio.getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' })
    }
  });
});

describe('teste promisse', () => {
  test('Verifica se o repositório contém os projetos', () => {
    expect.assertions(2);
    return exercicio.getRepos('https://api.github.com/users/tryber/repos').then((result) => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});

