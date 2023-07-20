let soma = 0;
for (let n = 1; n <= 500; n++) {
    if (n % 2 === 1 && n % 3 === 0) {
      soma += n;
    }
  }
  console.log("A soma dos números ímpares múltiplos de três de 1 a 500 é:", soma);