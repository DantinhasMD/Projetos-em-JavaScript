/* Desafio - Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' 
determine se uma determinada string é válida. 

Entrada - Uma string é considerada válida se: Caracteres de abertura devem ser fechadas pelo mesmo tipo. 
Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida. 

Saída - A saída corresponde a um valor Booleano */

let valor = gets();

console.log(isValid(valor));

function isValid(s) { //receber a string s
  const stack = []; // Pilha para caracteres de abertura
  const correspondentes = { //o que corresponde ao que 
    ')': '(',
    '}': '{',
    ']': '['
  }; //os objetos que recebe

  for (let char of s) { //verificar se é de abertura ou fechamento
    if (char in correspondentes) { 
      if (stack.length > 0 && stack[stack.length - 1] === correspondentes[char]) { //se for de fechamento
        stack.pop(); // Remove o caractere de abertura correspondente
      } else {
        return false; //se não encontrar o caractere correspondente
      }
    } else {
      stack.push(char); // Se for um caractere de abertura, adiciona em stack
    }
  }
  
  return stack.length === 0; // Verifica se todos  foram fechados
}