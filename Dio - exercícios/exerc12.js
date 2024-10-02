// Programa que seja capaz de percorrer uma lista de úmeros e exiba apenas os números pares 

const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < listNumbers.length; i++){
    const number = listNumbers[i];
    if (number % 2 === 0) {
        console.log(number);
    }
}