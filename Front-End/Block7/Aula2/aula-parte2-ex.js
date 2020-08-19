const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const habilities = (student) => {
  for (let i=0; i<Object.keys(student).length; i++){
    const x = Object.keys(student)[i];
    const y = student[x];
    console.log(`${x}, Nível: ${y}`);
  }
}

console.log('Estudante 1');
habilities(student1);

console.log('Estudante 2');
habilities(student2);
