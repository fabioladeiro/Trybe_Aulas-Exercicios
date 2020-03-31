let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

// Exercicio 1
// console.log("Bem vinda, " + info.personagem);

// Exercicio 2
// console.log(info.recorrente);

// Exercicio 3
// for (let i in info){
//   console.log(i);
// }

// Exercicio 4
 // for (let i in info){
//   console.log(info[i]);
 // }

//  Exercicio 5
for (let i in info2, info){
  if (info[i] == info2[i]){
    console.log(info[i]);
  } else{
    console.log(info[i] + " e " + info2[i]);
  }
}