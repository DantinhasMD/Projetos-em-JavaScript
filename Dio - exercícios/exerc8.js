// Transformar o exercício 5 em função
// 1 - À vista, Débito - 10% de desconto; 2 - À vista, Dinheiro ou PIX, 15% de desconto;
// 3 - Em duas vezes, preço normal sem juros; 4- Acima de duas vezes, preço normal + 10% de juros

function pagamento(formaDePagamento, valor) {
    if (formaDePagamento === 1) {
        console.log('Sua compra é de R$' + valor + '.Você recebe 10% de desconto.');
        console.log('Sendo o total de R$' + (valor - (valor * 0.1)));
    } else if (formaDePagamento === 2) {
        console.log('Sua compra é de R$' + valor + '.Você recebe 15% de desconto.');
        console.log('Sendo o total de R$' + (valor - (valor * 0.15)));
    } else if (formaDePagamento === 3) {
        console.log('Sua compra é de R$' + valor + '.Você não terá juros sobre a compra.');
    } else {
        console.log('Sua compra é de R$' + valor + '.Você receberá 10% de juros sobre a compra,.');
        console.log('Sendo o total de R$' + (valor + (valor * 0.1)));
    }
}

function main(){
    pagamento(1, 120);
    pagamento(2, 990);
    pagamento(2, 650);
    pagamento(3, 220);
    pagamento(4, 80);
    pagamento(3, 20);
    pagamento(4, 1040);
}

main();