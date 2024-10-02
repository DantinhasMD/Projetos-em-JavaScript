// Calcular o Valor da Viagem

// 1- Preço do combustível
const precoCombustivel = 5.99;
// 2 - Gasto médio de combustível do carro por Km  
const kmPorLitro = 10;
// 3 - Distância em Km da Viagem
var distancia = 100;
// 4 - Cálculo
valorViagem = (distancia/kmPorLitro) * 5.99;
console.log(valorViagem.toFixed(2));