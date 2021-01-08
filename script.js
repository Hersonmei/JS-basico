

var alunos = ["Igor", "josé", "Marcos", "Mariana", "Ana"];


for ( aluno in alunos){
    console.log(aluno);
}

for (aluno of alunos){
    console.log(aluno);
}

// Nessa aula vismo a utilização do arrais, que é uma forma de ter vários elementos que seriam variáveis, sem precisar criar uma quantidade enorme de variáveis.

// Também tivemos o exemplo da utilização do for nos Arrays, onde no (in) ele vai mostrar o número do elemento da ordem, no caso o (índice), e utilizando (of), ele vai mostrar o conteúdo desse índice, que nesse caso é o nome do aluno.