const alunos = ['Ju', 'Pa', 'Ka'];
alunos.push('Va');
console.log(alunos);
console.log(alunos.pop());
console.log(alunos.shift());


const nome = "Vitor Augusto Souza Cortez";
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

const notas = [];

notas.push(3);
notas.push(7);
notas.push(9);
notas.push(2);
notas.push(6);
notas.push(6);
notas.push(7);

let soma = 0; 

for (i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;

}

const media = soma / notas.length;
console.log(media);