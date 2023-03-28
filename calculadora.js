function calcular(num1, num2, operador) {
    if (operador === '+') {
        return num1 + num2;
    } else if (operador === '-') {
        return num1 - num2;
    } else if (operador === '*') {
        return num1 * num2;
    } else if (operador === '/') {
        return num1 / num2;
    } else {
        return "Operador Invalido";
    }
}

const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));
const operador = prompt("Digite o operador (+, -, *, /):");

const resultado = calcular(valor1, valor2, operador);
console.log(`O resultado é: ${resultado}`);