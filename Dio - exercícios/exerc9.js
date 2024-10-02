/* 1 - Criar uma calsse para representar carros; marca, cor e gasto médio de combustível por Km rodado. 
2 - Crie um método que dado a qtd de quilômetros e o preço do combustível nos dê o valor(R$) para realizar esse percurso */ 

class carro {
    marca; // objetos da classe
    cor;
    kmPorLitro;

    constructor(marca, cor, kmPorLitro) { //exige que os parâmetros sejam declarados
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    valorViagem(distancia, precoCombustivel) { //metódo ou função
        console.log(`O ${this.marca} ${this.cor} roda ${this.kmPorLitro}km/L, de maneira que para a distância desejada o custo será de:`);
        return (distancia/this.kmPorLitro) * precoCombustivel;
    }
}

const uno = new carro ('Uno', 'Branco', 10);
console.log(uno.valorViagem(100, 5.99).toFixed(2));
const fiat = new carro ('Fiat', 'Preto', 12);
console.log(fiat.valorViagem(100, 5.99).toFixed(2));
const palio = new carro ('Palio', 'Cinza', 15);
console.log(palio.valorViagem(100, 5.99).toFixed(2));