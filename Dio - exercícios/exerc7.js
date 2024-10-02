// função que escreve seu nome

function escreverNome(nome){
    console.log('Meu nome é ' + nome);
}

// Função que identifica se o usuário é maior de idade
function verificarIdade(idade){
    if (idade <18){
        console.log('Sua idade é ' + idade +'.Você é menor de idade');
    }
    else {
        console.log('Sua idade é ' + idade +'.Você é maior de idade');
    }
}

function main() {
    escreverNome('Maria');
    escreverNome('Marcos');
    escreverNome('Vitor');
    escreverNome('Miguel');
    escreverNome('Heitor');
    escreverNome('Madalena');
    verificarIdade(18);
    verificarIdade(12);
    verificarIdade(45);
    verificarIdade(3);
    verificarIdade(8);
    verificarIdade(17);
}

main();