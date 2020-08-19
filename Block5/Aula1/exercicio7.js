let nota = 100;

if ( nota <= 100 && nota >= 90) {
    console.log("Seu conceito é A");
} else if ( nota < 90 && nota >= 80 ) {
    console.log("Seu conceito é B");
} else if ( nota <80 && nota >= 70 ) {
    console.log("Seu conceito é C");
} else if ( nota < 70 && nota >= 60) {
    console.log("Seu conceito é D");
} else if ( nota < 60 && nota >= 50) {
    console.log("Seu conceito é E");
} else if ( nota < 50 && nota >= 0) {
    console.log("Seu conceito é F");
} else {
    console.log("Nota inválida");
}