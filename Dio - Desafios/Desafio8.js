/* Desafio - Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. 
Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de 
algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 
Entrada - A entrada consiste em um número inteiro n, representando o valor total. 

Saída - A saída consiste em retornar o menor número de números quadrados perfeitos.
Se você entrar com 12, a saída deve ser 3, pois 12 = 4 + 4 + 4.*/

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

const dp = new Array(n + 1).fill(Infinity); 
dp[0] = 0; 

//TODO: Com base no valor total, retorne o menor número de quadrados perfeitos.
for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) { 
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
}

console.log(dp[n]);