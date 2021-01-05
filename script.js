

var str = "Valor \"texto entre aspas\" qualquer";

console.log(str)


// Adição se tratando de string, vai ser uma concatenação.
var string = "Valor qualquer";
string += " outro texto";

console.log(string)



// Sempre que aparecer no console azul, vai ser um número. É possível fazer essa soma de uma string com um número, no entando vai ser uma concatenação na verdade, não uma soma em si. Tanto que o número 8 deixa de ser azul e fica preto.
var numero = 8;
var string = "Valor qualquer";
string += " outro texto " + numero;

console.log(numero)
console.log(string)