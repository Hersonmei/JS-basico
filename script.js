//Ressaltar, que o objeto é como se fosse um arrais, mas os elementos deles não são variáveis mas sim chamados de (propriedades), e podem ter qualquer tipo de valor, pode ser até mesmo um Arrays ou mesmo outro objeto.

var aluno = {nome: "Igor", 
            nota1: 8.0,  
            conceitos: ["bom", "ruim"],
}            



console.log(aluno.nota1); 

console.log(aluno.nome);

console.log(aluno["nome"]); 

//Isso mostra que o objeto e o arrays são muito parecidos, diferença vai ser que ao invés de usar o index, eu sou usar uma chave. Mesmo aquele item que está entre [], se fosse arrays colocaria a posição 0,1,2.., mas nesse caso em coloco a chave.

console.log(aluno.conceitos[0]); 
//Exemplo usando um arrays.