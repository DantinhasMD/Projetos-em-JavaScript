/* Desafio: Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

Entrada - A entrada deverá ser composta pelo valor A na primeira linha, seguido do valor N na segunda. 

Saída - A saída deverá retornar o valor da soma de todos os múltiplos A até o seu limite N. */

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de ENTRADA (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = parseInt(gets()); 
var N = parseInt(gets()); 
 
//Começamos a soma dos números com zero
somaMultiplos = 0;

//i = 1,  Mostra que os valores de * começarão no 1 (a * 1) e o i++ garante que esse número cresça (a * 2)
for (var i = 1; i *a <= N; i++){
  somaMultiplos += i * a; //Armazenar os valores que cabem no for para somar
}

//Exibir
print(somaMultiplos);
