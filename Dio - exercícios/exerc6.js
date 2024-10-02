// Transformação do exercício 4 utilizando Funções

function calculaImc(peso, altura) {
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return 'Você está abaixo do peso';
    } else if (imc >= 18.5 && imc <= 25) {
        return 'Você está no Peso ideal';
    } else if (imc >= 25 && imc <= 30) {
        return 'Você está acima do Peso';
    } else if (imc >= 30 && imc <= 40) {
        return 'Você está Obeso';
    } else {
        return 'Você está com Obesidade Grave';
    }
    
}

function main(){
    const peso = 60;
    const altura = 1.63;

    const imc = calculaImc(peso, altura);
    console.log(classificarImc(imc));
}

main();