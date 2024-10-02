// Algoritmo que calcule a média do aluno - Sendo < 5 = reprovado; entre 5 e 7 = recuperação; > 7 passou

var nota1 = 3;
var nota2 = 6;
var nota3 = 5;

const media = (nota1 + nota2 + nota3)/3;
console.log(media.toFixed(1))

if (media < 5) {
    console.log('Você não atingiu a nota necessária');
} else if (media >= 5 & media <=7) {
    console.log('Você está de recuperação');
} else {
    console.log('Você passou de ano')
}