const animals = [
  {
    id: '0938aa23-f153-4937-9f88-4858b24d6bce',
    name: 'lions',
    popularity: 4,
    location: 'NE',
    residents: [
      {
        name: 'Zena',
        sex: 'female',
        age: 12
      },
      {
        name: 'Maxwell',
        sex: 'male',
        age: 15
      },
      {
        name: 'Faustino',
        sex: 'male',
        age: 7
      },
      {
        name: 'Dee',
        sex: 'female',
        age: 14
      }
    ]
  },
  {
    id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
    name: 'tigers',
    popularity: 5,
    location: 'NW',
    residents: [
      {
        name: 'Shu',
        sex: 'female',
        age: 19
      },
      {
        name: 'Esther',
        sex: 'female',
        age: 17
      }
    ]
  },
  {
    id: 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
    name: 'bears',
    popularity: 5,
    location: 'NW',
    residents: [
      {
        name: 'Hiram',
        sex: 'male',
        age: 4
      },
      {
        name: 'Edwardo',
        sex: 'male',
        age: 4
      },
      {
        name: 'Milan',
        sex: 'male',
        age: 4
      },
    ]
  },
  {
    id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
    name: 'penguins',
    popularity: 4,
    location: 'SE',
    residents: [
      {
        name: 'Joe',
        sex: 'male',
        age: 10
      },
      {
        name: 'Tad',
        sex: 'male',
        age: 12
      },
      {
        name: 'Keri',
        sex: 'female',
        age: 2
      },
      {
        name: 'Nicholas',
        sex: 'male',
        age: 2
      },
    ]
  },
  {
    id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
    name: 'otters',
    popularity: 4,
    location: 'SE',
    residents: [
      {
        name: 'Neville',
        sex: 'male',
        age: 9
      },
      {
        name: 'Lloyd',
        sex: 'male',
        age: 8
      },
      {
        name: 'Mercedes',
        sex: 'female',
        age: 9
      },
      {
        name: 'Margherita',
        sex: 'female',
        age: 10
      },
    ]
  },
  {
    id: '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    name: 'frogs',
    popularity: 2,
    location: 'SW',
    residents: [
      {
        name: 'Cathey',
        sex: 'female',
        age: 3
      },
      {
        name: 'Annice',
        sex: 'female',
        age: 2
      }
    ]
  },
  {
    id: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
    name: 'snakes',
    popularity: 3,
    location: 'SW',
    residents: [
      {
        name: 'Paulette',
        sex: 'female',
        age: 5
      },
      {
        name: 'Bill',
        sex: 'male',
        age: 6
      }
    ]
  },
  {
    id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
    name: 'elephants',
    popularity: 5,
    location: 'NW',
    residents: [
      {
        name: 'Ilana',
        sex: 'female',
        age: 11
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4
      },
    ]
  },
  {
    id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
    name: 'giraffes',
    popularity: 4,
    location: 'NE',
    residents: [
      {
        name: 'Gracia',
        sex: 'female',
        age: 11
      },
      {
        name: 'Antone',
        sex: 'male',
        age: 9
      },
      {
        name: 'Vicky',
        sex: 'female',
        age: 12
      },
      {
        name: 'Clay',
        sex: 'male',
        age: 4
      },
      {
        name: 'Arron',
        sex: 'male',
        age: 7
      },
      {
        name: 'Bernard',
        sex: 'male',
        age: 6
      }
    ]
  }
]

function createMapResidentes() {
  return animals.map(elemento => elemento.residents.map(elemento2 => elemento2))
}

function createAnimalLocationTwo() {
  return animals.reduce((acc, {name,residents}) => {
    if (acc[name]) (acc[name]).push(residents[0].name);
    else acc[name] = [residents[0].name];
    return acc
  },{});
}

function createAnimalLocation() {
  return animals.reduce((acc, {location,name,residents}) => {
    if (acc[location]) (acc[location]).push(createAnimalLocationTwo());
    else acc[location] = [createAnimalLocationTwo()];
    return acc
  },{});
}

// function animalMap(options) {
//   if (!options) return createAnimal();
// }

console.log(createAnimalLocation())

// // com opções especificadas, retorna nomes de animais
// options = { includeNames: true }
// actual = animalMap(options);
// expected = {
//   NE: [
//     { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
//     { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] }
//   ],
//   NW: [
//     { tigers: ['Shu', 'Esther'] },
//     { bears: ['Hiram', 'Edwardo', 'Milan'] },
//     { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] }
//   ],
//   SE: [
//     { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
//     { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] }
//   ],
//   SW: [
//     { frogs: ['Cathey', 'Annice'] },
//     { snakes: ['Paulette', 'Bill'] }
//   ]
// };

// assert.deepEqual(actual, expected);

