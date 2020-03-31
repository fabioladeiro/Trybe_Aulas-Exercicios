// Exercício 1
// function verificaPalindrome(palindrome){
//   array = palindrome.split("");
//   reverse = array.reverse();
//   join = array.join("");
//   if (join === palindrome) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificaPalindrome("arara"));

// Exercício 3
// function recebeArray(array) {
//   let menorValor = array[0];
//   for (let i=0; i < array.length; i++){
//     if (array[i]<menorValor) {
//       menorValor = array[i]
//     } 
//   }
//   return array.indexOf(menorValor);
// }

// console.log(recebeArray([2,4,6,7,10,0,-3]));

// Exercício 2
// function recebeArray(array) {
//   let maiorValor = array[0];
//   for (let i=0; i < array.length; i++){
//     if (array[i]>maiorValor) {
//       maiorValor = array[i]
//     } 
//   }
//   return array.indexOf(maiorValor);
// }

// console.log(recebeArray([2,4,6,7,10,0,1]));

// Exercício 4
// function receberArray(array){
//   let maisCaracteres = array[0];
//   for (let i=0; i < array.length; i++){
//     if (array[i].length>maisCaracteres.length){
//       maisCaracteres = array[i];
//     }
//   }
//   return maisCaracteres;
// }

// console.log(receberArray(["José","Lucas","Nádia","Fernanda","Cairo","Joana"]));

// function recebeArray(array){
//   sort = array.sort();
//   for (let i=0; i<array.length; i++){
//     if (array[i] === array [i-1]){
//       contador++
//     } else {
//       contador = 0;
//     }
//   }
// }
// Solucao Rangel
// function repeticaoInteiros(listaNumeros) {
//   let repetido = 0;
//   let contagem = 0;
//   let avaliador = listaNumeros[0]
//   for(let i = 0; i < listaNumeros.length ; i++) {
//   let cont = 0;
//   for(let j = 0 ; j < listaNumeros.length ; j++) {
//   if(listaNumeros[j] === listaNumeros[i]) {
//   cont++;
//   }
//   if(cont > contagem) {
//   contagem = cont;
//   repetido = listaNumeros[j];
//   }
//   }
//   }
//   return repetido;
//   }
  
//   console.log(repeticaoInteiros([2, 3, 2, 5, 8, 2, 3])); 


// Exercicio 6
// function recebeInteiro(x) {
//   soma = 0;
//   for (let i=0; i<=x; i++){
//     soma += i;
//   }
//   return soma;
// }
// console.log(recebeInteiro(5));



