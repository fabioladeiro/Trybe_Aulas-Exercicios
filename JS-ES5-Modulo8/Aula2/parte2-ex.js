const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};


const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//exercise 8 
function exercise8(obj,key,value){
  const x = Object.values(obj).inspect(value);
  const y = Object.keys(obj).inspect(key);
  console.log(x);
}
exercise8(lesson3,'turno','noite');

//exercise 1
function exercise1(obj,key,value) {
  obj[key] = value;
  console.log(obj);
}
exercise1(lesson2,'turno','manhã');

//exercise 2
function exercise2(obj) {
  const keys = Object.keys(obj);
  console.log(keys);
}
exercise2(lesson1);

//exercise 3
function exercise3(obj) {
  const keys = Object.keys(obj);
  let contador = 0;
  for (i in keys) {
    contador += 1;
  }
  console.log(`O objeto tem tamanho ${contador}.`);
}
exercise3(lesson1);

//exercise 4
function exercise4(obj) {
  const values = Object.values(obj);
  console.log(values);
}
exercise4(lesson3);

//exercise 5
const allLessons = Object.assign({},{lesson1},{lesson2},{lesson3});
console.log(allLessons);

//exercise 6
function exercise6() {
  let x = 0;
  const keysAllLesson = Object.values(allLessons);
  for (let i=0; i<keysAllLesson.length; i++){
  const qntEstudantes = keysAllLesson[i];
  x += qntEstudantes.numeroEstudantes;
  }
  console.log(x);
}
exercise6();

//exercise 7
function exercise7(obj,index) {
  const x = Object.values(obj)[index];
  console.log(x);
}
exercise7(lesson1,0);

//exercise 8
function exercise8(obj, key, value) {
  if (obj[key] === value) return true;
  return false;
}

console.log(exercise8(lesson3, 'turno', 'noite'));
console.log(exercise8(lesson3, 'materia', 'Maria Clara'));
