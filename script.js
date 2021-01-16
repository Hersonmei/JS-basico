
var numero1 = 4;
let numero2 = 5;
const numero3 = 6;

numero1 = 7;
// numero3 = 5;   Exemplo, que na variável eu consigo atribuir um novo valor mas se eu fizer o mesmo para a const, vai dar erro. Nem o push em um array não vai ser possível. 


console.log(numero1);
console.log(numero2);
console.log(numero3);

//A diferença da variável para constante (CONST), é que a variável pode ter um novo valor atribuído, a constante não, vai dar erro. No entanto, não confundir que eu posso addicionar um valor por exemplo a uma arrays ou um objeto, posso adicionar valores a ele, mas ele não mudam, pois continuam sendo o mesmo arrays ou mesmo objeto. Mas add outro objeto ou outro arrays não será possível.


//A diferença da variável para (LET), é que a variável vai ter um escopo global, e o LET e o CONST só vão existir dentro do escopo, como por exemplo dentro de uma chave, colchete, de for, wgile, função... Tanto que o console.log não consegue acessar o LET e o CONST se estiver fora deste escopo. E igualmente a variável, o LET pdoerá ter um novo valor atribuído, oq a CONST não permite.