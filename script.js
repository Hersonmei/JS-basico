// Aula de resumão de objetos, mostrando as três diferentes formas de construir um.


var a = {
    nome: "Igor",
    sobrenome: "Oliveira"
}

console.log(a);
console.log(a.nome);
console.log(a.sobrenome);






//Essa segunda forma é o objeto dentro de uma função. Reparas nas formas que podemos chamar no console.log.

function bbj(n, l){
    return {
        name: n,
        lastname: l
    }
}

var english = bbj("Herson", "Meireles")


console.log(english);
console.log(english.name);
console.log(english["lastname"]);






//A terceira forma é uma mais elaborada, que gera as INSTÂNCIAS, que tbm precisa utilizar o (new).

function abc(e, m){

    this.nome1 = e;
    this.sobrenome2 = m;
}

var c = new abc("Ivson", "Antonio")

console.log(c);
console.log(c.nome1);
console.log(c["sobrenome2"]);