var jogador = "x";

function jogar(celula){
    //alert("funcionou!");

    if(celula.innerHTML == ""){

        celula.innerHTML = jogador;

        if(jogador == "x"){
            jogador = "o";
            celula.style.backgroundColor = "red";

        }else{
            jogador = "x";
            celula.style.backgroundColor = "blue"; 
        }
    }
}

function reiniciar(){
    window.location.reload();
}

const nomes = ['K','Maxima','Shingo','Benimaru','Kyo','Iori'];
function gerarBatalha(){

    // sorteia um nome da lista, "Math.random vai sortear os itens","math.floor arredonda o numero da lista"

    const nome1 = nomes [Math.floor(Math.random() * nomes.length)];
    const nome2 = nomes [Math.floor(Math.random() * nomes.length)];

    while(nome1 === nome2){
        gerarBatalha();
    }

    // escreve na tela
    document.getElementById('jogador1').textContent = nome1;
    document.getElementById('jogador2').textContent = nome2;


    
}

function adicionar() {
    var nome = document.getElementById("nome").value;
    nomes.push(nome);
    Listar();
}

function Listar(){
    var listagem = document.getElementById("Lista");
    listagem.innerHTML = "";                     //limpa a lista em tela

    for(var i = 0; i < nomes.length; i++){          // cria elemento <li> para o HTML
        var item = document.createElement("li");   //cria elemento <li> para o HTML

        var nomeitem = nomes[i];              //guarda na variavel nomeItem o nome especifico da lista
        item.innerHTML = nomeitem;           //coloca valor dentro do <li>
        listagem.appendChild(item);          //adiciona o <li> na lista do HTML, dentro do <ul>
    }
}
