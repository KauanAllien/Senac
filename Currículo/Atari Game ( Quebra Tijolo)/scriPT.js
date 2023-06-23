//Definir área do canvas//
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//Configurar à Raquete//
var raqueteAltura = 10;                      //Altura da Raquete
var raqueteLargura = 75;                    //Largura da Raquete
var raqueteX = (canvas.width - raqueteLargura) / 2; //centralizar raquete
var velocidadeRaquete = 7;

//Configurar a Bola//
var bolaRadius = 10 ;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;                      
var bolaDX = 2;                                            //direção da bola em X (esquerda/direita)
var bolaDY = -2;                                           //direção da bola em Y (acima/baixo)

var setaDireita = false;                                    //Comando para a raquete se mover para direita 
var setaEsquerda = false;                                   //Comando para a raquete se mover para esquerda

// Criação de Movimentação da Raquete//
    document.addEventListener("keydown", descerDaTecla);
    document.addEventListener("keyup", subirDaTecla);

    function descerDaTecla(Tecla){
        //Se o valor = "direita" || ou valor = "setaDireita" 
        if(Tecla.key === "Right" || Tecla.key === "ArrowRight"){
            setaDireita = true; //Ativa variável setaDireita

        // Se o valor = "esquerda" || ou valor = "setaEsquerda"
        }else if(Tecla.key === "left" || Tecla.key === "Arrowleft")
            setaEsquerda = true; //Ativa o valor setaEsquerda
    }


    function subirDaTecla(){

    }

function desenharRaquete(){
    desenho.beginPath();                          //Inicia o Desenho
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura,raqueteAltura);
    desenho.fillStyle = "yellow";
    desenho.fill();
    desenho.closePath();


} 

function desenhar(){
    desenho.clearRect(0 ,0 , canvas.width, canvas.height );           //limpar o frame anterior
    desenharRaquete();
    //Se setaDireita estiver ativo && "e" raqueteX < largura dp canvas - raqueteLargura
    if(setaDireita === true && raqueteX < canvas.width - raqueteLargura){
        raqueteX = raqueteX + velocidadeRaquete;
        // Se setaEsquerda estiver ativo && "e" raqueteX > 0 "comeco do canvas"
    }else if(setaEsquerda && raqueteX > 0){
        raqueteX = raqueteX - velocidadeRaquete;
    }



    requestAnimationFrame(desenhar)                      //Atualizar à tela de forma suave
}
desenhar();                                           //Chama função desenhar

