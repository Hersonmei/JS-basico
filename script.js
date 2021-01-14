
// function criarAluno(nome, n1, n2){
    
//     return {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function() {
//             return (this.nota1 + this.nota2) / 2;
//         }
//     }
// }

//O próximo passo de aula, vai ser transformar a função acima que retorna um objeto em um objeto de verdade.


function aluno(nome, n1, n2){

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function () {
       return (this.nota1 + this.nota2) /2;
    }
}




// var turma = [
//     criarAluno("Herson", 9, 6),
//     criarAluno("Joao", 10, 5),
//     criarAluno("Marcela", 9, 8)
// ]

// var aluno = turma[0];

//E para realizar aquele passo anterior, é preciso realizar esse procedimento abaixo, chamado de instância, cada um é um objeto diferente e não tem relação um com o outro, como cada um fosse um objeto, já emcima é só 1 objeto.

var a = new aluno("Igor", 8, 7);
var a = new aluno ("João", 6, 7);

console.log(a.media());
