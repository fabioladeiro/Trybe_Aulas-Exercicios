// let n = 5;
// let i = 1;
// let j = 1;
// let k;
// let asterisco = [];
// let adicionar;
// let adiciona;
// let asterisco2;
// for (j=1; j <= n; j++){
//   adicionar = asterisco.push('*');
// }
// console.log(asterisco);
// console.log(adicionar);

// for (i=1; i < n; i++){
//   asterisco2 = asterisco;
//   let retira = asterisco2.splice(0,(asterisco2.length)-1);
//   for(k=n-1; k>0; k--){
//     adiciona = asterisco2.unshift(' '); 
//   }
//   console.log(asterisco2);
// }

let n = 5;
let symbol = "*";
let inputLine = '';
let inputPosition = n;

for (let i=0; i<n; i++){
  for (let j=0; j<n; j++){
    if (j<inputPosition-1) {
      inputLine += ' ';
    } else {
      inputLine += symbol; 
    }

  }
  inputPosition -= 1;
  console.log(inputLine);
  inputLine = '';
}


