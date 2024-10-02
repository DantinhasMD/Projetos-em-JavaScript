// Cálculo de IMC - IMC = peso / (altura * altura). Elabore um algoritmo que calcule:
const peso = 50;
const altura = 1.70;
const imc = peso / (altura * altura);
// 1 - Abaixo de 18.5 (Abaixo do peso); 2 - Entre 18.5 e 25 (Peso Normal); 3 - Entre 25 e 30 (Acima do peso)
// 4 - Entre 30 e 40 (Obeso); 5 - Acima de 40 (Obesidade Grave)

if (imc < 18.5) {
    console.log('Você está abaixo do peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Você está no Peso ideal');
} else if (imc >= 25 && imc <= 30) {
    console.log('Você está acima do Peso');
} else if (imc >= 30 && imc <= 40) {
    console.log('Você está Obeso');
} else {
    console.log('Você está com Obesidade Grave');
}

