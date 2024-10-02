// Algoritmo que calcule o que deve ser pago por um produto de acordo com a forma de pagamento
// 1 - À vista, Débito - 10% de desconto; 2 - À vista, Dinheiro ou PIX, 15% de desconto;
// 3 - Em duas vezes, preço normal sem juros; 4- Acima de duas vezes, preço normal + 10% de juros
var valor = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log('Você recebe 10% de desconto');
    console.log(valor - (valor * 0.1));
} 
else if (formaDePagamento === 2) {
    console.log('Você recebe 15% de desconto');
    console.log(valor - (valor * 0.15));
} 
else if (formaDePagamento === 3) {
    console.log('Você não terá juros sobre a compra');
    console.log(valor);
} 
else {
    console.log('Você receberá 10% de juros sobre a compra');
    console.log(valor + (valor * 0.1));
}