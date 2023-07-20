let maior = 0 

for (let i = 0; i < 5; i++) { 
    let numero = parseInt(prompt(`Digite um número: ${i+1}:`))
    if (numero > maior) { 
        maior = numero; 
    }
}

console.log(`O maior número é: ${maior}`); 