let custo = 10;
let venda = 13;

if ( custo>0 || venda>0){
    let lucro = 1000*(venda - (0.2*custo) - custo);
    console.log(lucro);
} else {
    console.log("Valores inválidos");
}
