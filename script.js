
function media(n1, n2) {
var nota1 = n1;
var nota2 = n2;
var media = (nota1 + nota2) / 2;


return media

}

var resultado = media(6, 7);
var m = media;


var resultado2 = m(2, 3)

console.log(resultado);
console.log(resultado2);

// Pornto, no primeiro caso, pelo que pude entender, vais er igual o da aula anterior, que a função eu posso executá-la e atribuir um resultado a ela, ou seja, retornar um resultado a ela. 

//Ou eu posso nessa aula, que seria o resultado 2, atribuir a função a uma variável, no caso eu peguei a função (média) e atribuí a variável (m), depois sim eu peguei a variável m e dei os valores. Então, prova que dá certo, atribuir a função a uma variável.

//Partindo desse pressuposto, no exemplo abaixo vamos atribuir a função diretamente a uma variável, nesse caso como já estamos fazendo isso diretamente, (NÃO PRECISAMOS DAR NOME A FUNÇÃO), logo ficaria assim:

var media = function (n1, n2){

    return (n1 + n2) / 2
}

var m = media (5, 6)

console.log(m);

// Ou podemos tbm declaralar o console.lo de uma maneira mais direta, sem necessidade de criar a variável (m).

console.log(media (7, 8));