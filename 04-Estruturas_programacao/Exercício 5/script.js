function calcularPrecoaPagar (precoetiqueta, condicaopagamento) {
let PrecoaPagar = 100

switch (condicaopagamento) {
    case 1: 
        PrecoaPagar = (precoetiqueta * 0.1); //À vista em dinheiro ou cheque 10% de desconto
    break;
    case 2:
        PrecoaPagar = (precoetiqueta * 0.15); //À vista no cartão de crédito 15% de descont 
    break; 
    case 3:
        PrecoaPagar = (precoetiqueta); //Em duas vezes, preço normal de etiqueta sem juros 
    break; 
    case 4:
        PrecoaPagar = (precoetiqueta * 0.33) //Em 3 vezes ou mais, preço normal de etiqueta mais juros 
    break;
default:
    console.log("Condição de pagamento");
}

    return (PrecoaPagar); 
} 

const precoetiqueta = 50
const condicaopagamento = 4

const PrecoaPagar = calcularPrecoaPagar (precoetiqueta, condicaopagamento); 

console.log("valor a pagar", PrecoaPagar); 

