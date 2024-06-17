function multiplica(num1, num2) {

    var result = num1 * num2;
    console.log(result);
    document.getElementById('register-resultado').value = result;
}

function dividir(num1, num2) {
    var result = num1 / num2;
    console.log(result);
    document.getElementById('register-resultado').value = result;
}

function soma(num1, num2) {
    var result = parseInt(num1) + parseInt(num2);
    console.log(result);
    document.getElementById('register-resultado').value = result;
}

function subtrair(num1, num2) {
    var result = num1 - num2;
    console.log(result);
    document.getElementById('register-resultado').value = result;
}