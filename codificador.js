//Challenge ONE Iniciante em Programação
//Sprint 01: Construa um decodificador de texto com Javascript

//Original: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
//Trocado:  J X L G F S N R W K D H Q M P U O I A C V B Y E Z T

function codificador(){

    var valorcod = document.getElementById('texto').value;

    var codificada = '';

    var arrayDeLetras = valorcod.split('');

    for (var i = 0; i < arrayDeLetras.length; i++) {

        var letraAtual = arrayDeLetras[i];

        if (letraAtual == 'A' || letraAtual == 'a') {
            codificada += (letraAtual == 'A') ? 'J' : 'j';
        } else if (letraAtual == 'B' || letraAtual == 'b') {
            codificada += (letraAtual == 'B') ? 'X' : 'x';
        } else if (letraAtual == 'C' || letraAtual == 'c') {
            codificada += (letraAtual == 'C') ? 'L' : 'l';
        } else if (letraAtual == 'D' || letraAtual == 'd') {
            codificada += (letraAtual == 'D') ? 'G' : 'g';
        } else if (letraAtual == 'E' || letraAtual == 'e') {
            codificada += (letraAtual == 'E') ? 'F' : 'f';
        } else if (letraAtual == 'F' || letraAtual == 'f') {
            codificada += (letraAtual == 'F') ? 'S' : 's';
        } else if (letraAtual == 'G' || letraAtual == 'g') {
            codificada += (letraAtual == 'G') ? 'N' : 'n';
        } else if (letraAtual == 'H' || letraAtual == 'h') {
            codificada += (letraAtual == 'H') ? 'R' : 'r';
        } else if (letraAtual == 'I' || letraAtual == 'i') {
            codificada += (letraAtual == 'I') ? 'W' : 'w';
        } else if (letraAtual == 'J' || letraAtual == 'j') {
            codificada += (letraAtual == 'J') ? 'K' : 'k';
        } else if (letraAtual == 'K' || letraAtual == 'k') {
            codificada += (letraAtual == 'K') ? 'D' : 'd';
        } else if (letraAtual == 'L' || letraAtual == 'l') {
            codificada += (letraAtual == 'L') ? 'H' : 'h';
        } else if (letraAtual == 'M' || letraAtual == 'm') {
            codificada += (letraAtual == 'M') ? 'Q' : 'q';
        } else if (letraAtual == 'N' || letraAtual == 'n') {
            codificada += (letraAtual == 'N') ? 'M' : 'm';
        } else if (letraAtual == 'O' || letraAtual == 'o') {
            codificada += (letraAtual == 'O') ? 'P' : 'p';
        } else if (letraAtual == 'P' || letraAtual == 'p') {
            codificada += (letraAtual == 'P') ? 'U' : 'u';
        } else if (letraAtual == 'Q' || letraAtual == 'q') {
            codificada += (letraAtual == 'Q') ? 'O' : 'o';
        } else if (letraAtual == 'R' || letraAtual == 'r') {
            codificada += (letraAtual == 'R') ? 'I' : 'i';
        } else if (letraAtual == 'S' || letraAtual == 's') {
            codificada += (letraAtual == 'S') ? 'A' : 'a';
        } else if (letraAtual == 'T' || letraAtual == 't') {
            codificada += (letraAtual == 'T') ? 'C' : 'c';
        } else if (letraAtual == 'U' || letraAtual == 'u') {
            codificada += (letraAtual == 'U') ? 'V' : 'v';
        } else if (letraAtual == 'V' || letraAtual == 'v') {
            codificada += (letraAtual == 'V') ? 'B' : 'b';
        } else if (letraAtual == 'W' || letraAtual == 'w') {
            codificada += (letraAtual == 'W') ? 'Y' : 'y';
        } else if (letraAtual == 'X' || letraAtual == 'x') {
            codificada += (letraAtual == 'X') ? 'E' : 'e';
        } else if (letraAtual == 'Y' || letraAtual == 'y') {
            codificada += (letraAtual == 'Y') ? 'Z' : 'z';
        } else if (letraAtual == 'Z' || letraAtual == 'z') {
            codificada += (letraAtual == 'Z') ? 'T' : 't';
        }

        else{
            codificada += arrayDeLetras[i];
        }
    }
    console.log(codificada);
}

function decodificador(){

    var valorcod = document.getElementById('texto').value;

    var decodificada = '';

    var arrayDeLetras = valorcod.split('');

    for (var i = 0; i < arrayDeLetras.length; i++) {

        var letraAtual = arrayDeLetras[i];

        if (letraAtual == 'J' || letraAtual == 'j') {
            decodificada += (letraAtual == 'J') ? 'A' : 'a';
        } else if (letraAtual == 'X' || letraAtual == 'x') {
            decodificada += (letraAtual == 'X') ? 'B' : 'b';
        } else if (letraAtual == 'L' || letraAtual == 'l') {
            decodificada += (letraAtual == 'L') ? 'C' : 'c';
        } else if (letraAtual == 'G' || letraAtual == 'g') {
            decodificada += (letraAtual == 'G') ? 'D' : 'd';
        } else if (letraAtual == 'F' || letraAtual == 'f') {
            decodificada += (letraAtual == 'F') ? 'E' : 'e';
        } else if (letraAtual == 'S' || letraAtual == 's') {
            decodificada += (letraAtual == 'S') ? 'F' : 'f';
        } else if (letraAtual == 'N' || letraAtual == 'n') {
            decodificada += (letraAtual == 'N') ? 'G' : 'g';
        } else if (letraAtual == 'R' || letraAtual == 'r') {
            decodificada += (letraAtual == 'R') ? 'H' : 'h';
        } else if (letraAtual == 'W' || letraAtual == 'w') {
            decodificada += (letraAtual == 'W') ? 'I' : 'i';
        } else if (letraAtual == 'K' || letraAtual == 'k') {
            decodificada += (letraAtual == 'K') ? 'J' : 'j';
        } else if (letraAtual == 'D' || letraAtual == 'd') {
            decodificada += (letraAtual == 'D') ? 'K' : 'k';
        } else if (letraAtual == 'H' || letraAtual == 'h') {
            decodificada += (letraAtual == 'H') ? 'L' : 'l';
        } else if (letraAtual == 'Q' || letraAtual == 'q') {
            decodificada += (letraAtual == 'Q') ? 'M' : 'm';
        } else if (letraAtual == 'M' || letraAtual == 'm') {
            decodificada += (letraAtual == 'M') ? 'N' : 'n';
        } else if (letraAtual == 'P' || letraAtual == 'p') {
            decodificada += (letraAtual == 'P') ? 'O' : 'o';
        } else if (letraAtual == 'U' || letraAtual == 'u') {
            decodificada += (letraAtual == 'U') ? 'P' : 'p';
        } else if (letraAtual == 'O' || letraAtual == 'o') {
            decodificada += (letraAtual == 'O') ? 'Q' : 'q';
        } else if (letraAtual == 'I' || letraAtual == 'i') {
            decodificada += (letraAtual == 'I') ? 'R' : 'r';
        } else if (letraAtual == 'A' || letraAtual == 'a') {
            decodificada += (letraAtual == 'A') ? 'S' : 's';
        } else if (letraAtual == 'C' || letraAtual == 'c') {
            decodificada += (letraAtual == 'C') ? 'T' : 't';
        } else if (letraAtual == 'V' || letraAtual == 'v') {
            decodificada += (letraAtual == 'V') ? 'U' : 'u';
        } else if (letraAtual == 'B' || letraAtual == 'b') {
            decodificada += (letraAtual == 'B') ? 'V' : 'v';
        } else if (letraAtual == 'Y' || letraAtual == 'y') {
            decodificada += (letraAtual == 'Y') ? 'W' : 'w';
        } else if (letraAtual == 'E' || letraAtual == 'e') {
            decodificada += (letraAtual == 'E') ? 'X' : 'x';
        } else if (letraAtual == 'Z' || letraAtual == 'z') {
            decodificada += (letraAtual == 'Z') ? 'Y' : 'y';
        } else if (letraAtual == 'T' || letraAtual == 't') {
            decodificada += (letraAtual == 'T') ? 'Z' : 'z';
        }

        else{
            decodificada += arrayDeLetras[i];
        }
    }
    console.log(decodificada);

}