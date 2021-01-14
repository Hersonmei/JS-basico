
function criarAluno(nome, n1, n2){
    
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
    criarAluno("Herson", 9, 6),
    criarAluno("Joao", 10, 5),
    criarAluno("Marcela", 9, 8)
]

var aluno = turma[0];

//Para criar uma lista com o resultado em lista, devo utilizar o for, apresentado abaixo de uma forma mais simples como aprendemos anterioremente e depois aprensentando de uma forma mais elaborado, que vai ser utilizado mais na frente também.

for (var aluno of turma){
    console.log(aluno.nome + " - " + aluno.media() )
}

turma.forEach(function (elemento){
    console.log(elemento);
})

