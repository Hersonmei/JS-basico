
var calcMedia = function(){
    return (this.nota1 + this.nota2) / 2;
}


var turma = [
       {    
            nome: "Igor",
            nota1: 9,
            nota2: 7,
            media: calcMedia
        },
        {
            nome: "Joao",
            nota1: 6,
            nota2: 5,
            media: calcMedia
        } 

]

var aluno = turma[0];
console.log(aluno);
console.log(aluno.media());

//Pronto, abaixo nós vamos colocar uma forma simplificada e com menor chances de erros, pois se por acaso digitar o nota1 como not1, daria erro e dificultaria ficar procurando e trabalhando com um código grande. A turma continua como um array, mas nesse caso só atribuímos o valor a função, e a média que antes era uma variável fora, foi colocada dentro do objeto também para simplificar.

// Ressaltando que esse return dentro da função, está retornando um objeto.

function criarAluno(nome2, n3, n4){
    
    return {
        nome2: nome2,
        nota3: n3,
        nota4: n4,
        media: function() {
            return (this.nota3 + this.nota4) / 2;
        }
    }
}

var turma2 = [
    criarAluno("Herson", 9, 6),
    criarAluno("Joao", 10, 5),
    criarAluno("Marcela", 9, 8)
]

var aluno2 = turma2[0];
console.log(aluno2);
console.log(aluno2.media());

