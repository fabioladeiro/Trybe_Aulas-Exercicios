  const firstPromise = () => {
    return new Promise((resolve, reject) => {
      let array = [];
      for (let i=0; i<10; i++) {
        array.push(Math.floor(Math.random() * 50) + 1)
      }
      const mapFunction = array.map(elemento => elemento*elemento);
      const somaElementos = mapFunction.reduce((acc, currentValue) => acc += currentValue);
      (somaElementos < 8000) ? resolve() : reject();
    })
  }

  firstPromise()
    .then(() => console.log('Promise resolvida'))
    .catch(() => console.log('Deu erro'));
