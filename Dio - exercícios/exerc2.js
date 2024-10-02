// Programa para calcular o preço da viagem 
// 1 - Preço Etanol 
const precoEtanol = 4.79;
// 2 - Preço Gasolina 
const precoGasolina = 5.79;
// 4 - Gasto Médio de combustivel por Km
const kmPorLitro = 10; 
// 5 - Distância em Km
var distancia = 100;
// 3 - Tipo de combustivel
const tipoCombustivel = 'Etanol';

if (tipoCombustivel === 'Etanol') {
    valorViagem = (distancia/kmPorLitro) * precoEtanol;
    console.log(valorViagem.toFixed(2));
} 

else if (tipoCombustivel === 'Gasolina') {
    valorViagem = (distancia/kmPorLitro) * precoGasolina;
    console.log(valorViagem.toFixed(2));
}