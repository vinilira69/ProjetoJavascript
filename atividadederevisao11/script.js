/*
Exercício 2: Faça um programa que leia 5 números e informe o maior numero.
*/


let maior = 0

for ( let i = 0; i < 5; i++ ) {
     let numero = parseInt(prompt (`valor para analise: ${i+1}`));
     if (numero > maior) {
        maior = numero
     } 
}

console.log(`o maior numero é ${maior}`)