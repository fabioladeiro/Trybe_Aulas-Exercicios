// Parte II
// Exercício 1

// function fatorial(x) {
//   let fatorial=1;
//   for (let i=x; i>0; i--){
//     fatorial *= i;
//   }
//   return fatorial;
// }
// console.log(fatorial(10));

// arrow function

const fatorial = (x) => {
let fatorial = 1;
for (let i=x; i>0; i--){
  fatorial *= i;
}
return fatorial;
}

console.log(fatorial(5));