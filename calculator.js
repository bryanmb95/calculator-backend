const fs = require("fs");

function calcularSoma(listaDeNumeros) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return listaDeNumeros.reduce(reducer);
}




const calcularSubtracao = (num1, num2) => {
    const subtracao = num1 - num2;
    return subtracao;
}

const calcularMultiplicacao = (num1, num2) => {
    return num1 * num2;
}

const calcularDivisao = (num1, num2) => {
    return num1 / num2;
}




module.exports = {
    calcularSoma,
    calcularSubtracao,
    calcularMultiplicacao,
    calcularDivisao
}