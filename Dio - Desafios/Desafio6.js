/* Desafio - O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. 
Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por 
uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. 
Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as 
operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre 
resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n. */

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

if (n <= 2) {   //Logicamente, valores menores que dois resultam no mesmo número
    console.log(n);
} else {
    let i = n;
    let listNumbers = []; //armazenar os números que são subtraidos
    let total = 0; //Acumula o resultado final

    while (i >= 1) {
      listNumbers.push(i); //Enquanto for menor, armazena o número e subtrai
      i--;
    }
  
    while (listNumbers.length > 0) { // fatorial desajeitado
        if (listNumbers.length >= 4) {
            total += parseInt((listNumbers[0] * listNumbers[1]) / listNumbers[2]) + listNumbers[3];
            listNumbers.splice(0, 4);
            while (listNumbers.length >= 4) {
                total -= parseInt((listNumbers[0] * listNumbers[1]) / listNumbers[2]) + listNumbers[3];
                listNumbers.splice(0, 4);
            }
            if (listNumbers.length == 3) {
                total -= parseInt((listNumbers[0] * listNumbers[1]) / listNumbers[2]);

            }
            if (listNumbers.length == 2) {
                total -=  parseInt(listNumbers[0] * listNumbers[1]);

            }
            if (listNumbers.length == 1) {
                total -=  parseInt(listNumbers[0]);

            }

        } if (listNumbers.length === 3) {
            total = parseInt((listNumbers[0] * listNumbers[1]) / listNumbers[2]);

        } if (listNumbers.length === 2) {
            total = parseInt(listNumbers[0] * listNumbers[1]);

        }
    }
}

console.log(total);
