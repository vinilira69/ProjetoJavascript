const numero = parseInt(prompt("Insira um número"))
let tab = numero;
let i = 1;

console.log("Tabuada do $N:")
for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${tab} x ${i} = ${resultado}`);
} 


