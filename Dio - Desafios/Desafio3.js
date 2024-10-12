// DESAFIO - Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.  

let n = parseInt(gets()); 

function somatorio(n) { // Função recursiva 
  if (n === 0) {
    return 0;
  }
  return n + somatorio(n - 1);
}

let resultado = somatorio(n);
print(resultado);
