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


//Nesse exemplo agora, nós iremos alterar para que a forma de exibição do console.log fique mais simplificada, pois no exemplo a cima temos muitas coisas escritas. Vamos mudar a função para deixá-las mais simplificadas. Ex. abaixo:

//Lembrar que temos que o usar o (this.) na função, pois conforme o inglês ele aponta algo que está próximo. Então, se chamar só a função sem determinar o this, vai dar erro pois tem mais de uma nota, mas colocando o (this.) ele vai colocar o valor da função que está dentro do objeto, sendo então o valor mais próximo.


function calcMedia(){   
    return (this.notas[0] + this.notas[1]) / 2;

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
console.log(aluno2.media()); 

console.log(aluno3.nome); 
console.log(aluno3.media()); 