const x = multiplicar(4, 3);

function multiplicar(a, b) {
    return a * b;
}

document.getElementById("retorno").textContent = `Uma função "multiplicar" retorna = ${x} utilizando 4 e 3 como parâmetros.`