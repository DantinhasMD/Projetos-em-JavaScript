/* Desafio - Neste desafio você deverá construir uma função que recebe uma String e identifique se 
a mesma é um palíndromo, ou seja, se a String é igual a ela mesma invertida. Dado que temos a String 
"digital" uma vez invertida temos "latigid" que são diferentes. Logo, NÃO é um Palíndromo. Já se 
recebemos a string "radar" uma vez invertida temos "radar" que são iguais. */ 

let palavra = gets();
console.log(checaPalindromo(palavra));

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.
function checaPalindromo(palavra) {
  const letras = palavra.split('').reverse().join(''); //split - separa as letras (lista)
  if(palavra === letras){ //join - une elas novamente (palavra)
    return "TRUE";
  } else {
    return "FALSE"; 
  }
}