/* 1 - Crie uma classe para representar pessoas; nome, peso e altura. 
2 - Fazer o cálculo do seu IMC 
3 - Classificar o IMC */

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        console.log(`Olá, ${this.nome}, você nos informou que pesa ${this.peso}kg e mede ${this.altura}m. Logo, seu IMC é 
        de:` + (this.peso / Math.pow(this.altura,2)).toFixed(2) );
        return this.peso / Math.pow(this.altura,2);
    }

    classificarImc() {
        const imc = this.calcularImc();
        console.log('Considerando seu IMC:');
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
}

const vitor = new pessoa('Vitor', 88, 1.70); //instância
console.log(vitor.classificarImc());


const fernanda = new pessoa('Fernanda', 50, 1.60); 
console.log(fernanda.classificarImc());


const marcio = new pessoa('Marcio', 50, 1.94); 
console.log(marcio.classificarImc());