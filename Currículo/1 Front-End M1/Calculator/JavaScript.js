function Somar() {
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var total = document.getElementById("Resultado");
    total.innerHTML = num1 + num2;
}

function Subtrair() {
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var total = document.getElementById("Resultado");
    total.innerHTML = num1 - num2;

}

function Multiplicar() {
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var total = document.getElementById("Resultado");
    total.innerHTML = num1 * num2;
}

function Dividir() {
    var num1 = document.getElementById("N1").value;
    var num2 = document.getElementById("N2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var total = document.getElementById("Resultado");
    total.innerHTML = num1 / num2;
}

function Limpar () {
    var total = document.getElementById("Resultado");
    total.innerHTML = " ";
    document.getElementById("N1").value="";
    document.getElementById("N2").value="";
}

function verificarVazio(){
    if(num1 == ''){
        alert("Preencha o campo 1!");
    }
    if(num2 == ''){
        alert("Preencha o campo 2!");
    }
}