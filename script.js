//Quando um objeto tem uma variável, temos nesse caso uma propriedade, mas quando temos uma função, vamos ter um método!

var aluno = {
            nome: "Herson", 
            notas : [7, 8],
            
            media: function(n1, n2){
                return (n1 + n2) / 2;
            }
}            


var aluno1 = {
    nome: "Joao", 
    notas : [5, 8],
    
    media: function(n1, n2){
        return (n1 + n2) / 2;
    }
}   

console.log(aluno.nome); 
console.log(aluno.media(aluno.notas[0], aluno.notas[1])); 

console.log(aluno1.nome); 
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1])); 


// A primeira modificação que podemos fazer é em relação a fução, caso eu queria alterar e não queria fazer a mudança em todos, por exemplo se for uma furma grande, eu posso tirar a função de dentro do objetivo, dar um nome a mesma, de media a média dentro do objeto vai chamar essa função. Ex. abaixo:



function calcMedia(n1, n2){   
    return (n1 + n2) / 2; 

} 

var aluno2 = {
    nome: "Vitor", 
    notas : [7, 8],
    
    media: calcMedia
}
           


var aluno3 = {
nome: "Amanda", 
notas : [5, 8],

media: calcMedia
}   

console.log(aluno2.nome); 
console.log(aluno2.media(aluno2.notas[0], aluno2.notas[1])); 

console.log(aluno3.nome); 
console.log(aluno3.media(aluno3.notas[0], aluno3.notas[1])); 