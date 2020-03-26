let peca = "pEãO";
let pecaMinusculo = peca.toLowerCase();

if ( pecaMinusculo == "rei") {
    console.log("Qualquer direção");
} else if ( pecaMinusculo == "dama" ) {
    console.log("Qualquer direção e quantas casas quiser");
} else if ( pecaMinusculo == "torre" ) {
    console.log("Vertical, horizontal e quantas casas quiser");
} else if ( pecaMinusculo == "bispo" ) {
    console.log("Diagonal e quantas casas quiser");
} else if ( pecaMinusculo == "cavalo" ) {
    console.log("Duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante");
} else if ( pecaMinusculo == "peão" ) {
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas e não pode retroceder");
} else {
    console.log("Peça inválida");
}