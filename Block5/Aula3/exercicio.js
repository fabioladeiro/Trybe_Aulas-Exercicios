function operacoes(x,y) {

let adicao = x + y;
let subtracao = x - y;
let multiplicacao = x * y;
let divisao = x / y;
let modulo = x % y;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

}

function comparacao (x,y){

if ( x > y) {
    console.log("O maior número é " + x);
} else {
    console.log("O maior número é " + y);
}  
}

function comparacao2 (x,y,z){

if ( x > y && x > z) {
    console.log("O maior número é " + x);
} else if ( y > x && y > z) {
    console.log("O maior número é " + y);
} else {
    console.log("O maior número é " + z);
}
}

function verificacaoZero (x){

if ( x > 0) {
    console.log("The number is positive");
} else if ( x < 0 ) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}
}

function verificacaoTriangulo (x,y,z){

angulos= true;
if ( x + y + z == 180) {
    console.log(angulos);
} else {
    console.log(!angulos);
    console.log("Estes ângulos não representam um triângulo");
}
}

operacoes(20,3);
comparacao(20,3);
comparacao2(3,4,5);
verificacaoZero(0);
verificacaoTriangulo(190,50,30);
