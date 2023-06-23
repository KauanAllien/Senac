var frase = "A palavra mãe não é substantivo, é um verbo. Mãe é cuidar,brigar,chorar,brincar,sorrir,ajudar,mudar,se preocupar,se irritar, Mãe é saber amar!";

function gerarFrase(){
    var texto  = document.getElementById("frase");
    texto.innerHTML = frase;
}

function lerFrase() {
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso);
}