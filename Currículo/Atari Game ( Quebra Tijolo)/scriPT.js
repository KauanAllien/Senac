//Definir área do canvas//
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//Configurar à Raquete//
var raqueteAltura = 10;                      //Altura da Raquete
var raqueteLargura = 75;                    //Largura da Raquete
var raqueteX = (canvas.width - raqueteLargura) / 2; //centralizar raquete
var velocidadeRaquete = 15;

//Configurar a Bola//
var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;                      
var bolaDX = 4;                                            //direção da bola em X (esquerda/direita)
var bolaDY = -4;                                           //direção da bola em Y (acima/baixo)

var tijolosPorLinha = 5;
var tijolosPorColuna = 8;
var TijoloLargura = 60;
var TijoloAltura = 20;
var TijoloEspacamento = 10;
var EspacamentoSuperiorQuadro = 30;
var EspacamentoEsquerdoQuadro = 30;
var Tijolos = [];              //Lista de Tijolos

var totalPontuação = tijolosPorLinha * tijolosPorColuna * 10;
var pontuacao = 0;

//Dedicado apenas a inicialização dos tijolos
for( var coluna=0; coluna < tijolosPorColuna; coluna++  ){
    Tijolos[coluna] = []   //012345

    for(var linha=0; linha < tijolosPorLinha; linha++ ){
        Tijolos[coluna][linha] = {x:0, y:0, ativo:1 }
        //X é a posição esquerda/direita no canva
        //Y é a posição acima/abaixo no canva
        //Ativo, determina se o tijolo aparece ou não, 1 ou 0
    }
}



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
        }else if(Tecla.key === "Left" || Tecla.key === "ArrowLeft"){
            setaEsquerda = true; //Ativa o valor setaEsquerda
    
        }
    }            

    function subirDaTecla(Tecla){
        //Se o valor = "direita" || ou valor = "setaDireita" 
        if(Tecla.key === "Right" || Tecla.key === "ArrowRight"){
            setaDireita = false; //Ativa variável setaDireita

        // Se o valor = "esquerda" || ou valor = "setaEsquerda"
        }else if(Tecla.key === "Left" || Tecla.key === "ArrowLeft"){
            setaEsquerda = false; //Ativa o valor setaEsquerda
        }
    }

function desenharRaquete(){
    desenho.beginPath();                          //Inicia o Desenho
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura,raqueteAltura);
    desenho.fillStyle = "yellow";
    desenho.fill();
    desenho.closePath();
    

}

function desenharBola(){
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "red";
    desenho.fill();
    desenho.closePath();
}

    function desenharTijolos(){
        for(var coluna=0; coluna < tijolosPorColuna; coluna++){
            for(var linha=0; linha < tijolosPorLinha; linha++){

                if(Tijolos[coluna] [linha].ativo == 1){          //Verifica se Tijolo está ativo para desenhalo
                    var TijoloX = (coluna * (TijoloLargura + TijoloEspacamento)+ EspacamentoEsquerdoQuadro);
                    var TijoloY = (linha * (TijoloAltura + TijoloEspacamento)+ EspacamentoSuperiorQuadro);

                    Tijolos[coluna] [linha].x = TijoloX;
                    Tijolos[coluna] [linha].y = TijoloY;

                    desenho.beginPath();
                    desenho.rect(TijoloX,TijoloY,TijoloLargura,TijoloAltura);
                    desenho.fillStyle = "Gold";
                    desenho.fill();
                    desenho.closePath();

                }

            }
        }
    }


function detectarColisão(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha++){

            var Tijolo = Tijolos[coluna] [linha];
            if(Tijolo.ativo === 1){
                if(bolaX + bolaRadius > Tijolo.x
                    && bolaX - bolaRadius < Tijolo.x + TijoloLargura 
                    && bolaY + bolaRadius > Tijolo.y 
                    && bolaY - bolaRadius < Tijolo.y + TijoloAltura){
                        bolaDY = -bolaDY;
                        Tijolo.ativo = 0;
                        tela = document.getElementById("Screen");
                        pontuacao = pontuacao + 10;
                        tela.innerHTML = "Score: " + pontuacao;

                        if(pontuacao === totalPontuação){
                            window.location.reload();
                        }
                        
                }
            }
        }        
    }    
}

function GameOver(){
    var GameOver = document.getElementById("GameOver");
    GameOver.style.display = "block";
}

function Reiniciar(){
    document.location.reload();
}

function desenhar(){
    desenho.clearRect(0 ,0 , canvas.width, canvas.height );           //limpar o frame anterior
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisão();
    

        //Analisar colisão de eixo X, colisão do canto direito/esquerdo
    if(bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius){
        bolaDX = - bolaDX; //Inverte direção direita/esquerda
    }

    //Analisa colisão com parte de cima
    if(bolaY + bolaDY < bolaRadius){
        bolaDY = -bolaDY; //Inverte colisão ao bater em cima

    }else if(bolaY + bolaDY > canvas.height - bolaRadius - raqueteAltura ){

            //Se for maior que o começo da raquete e menor que o final da raquete
        if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){

            bolaDY = -bolaDY;                                    //Inverte Direção

        }else{
            GameOver();
        }
    }



    //Se setaDireita estiver ativo && "e" raqueteX < largura dp canvas - raqueteLargura
    if(setaDireita === true && raqueteX < canvas.width - raqueteLargura){
        raqueteX = raqueteX + velocidadeRaquete;

        // Se setaEsquerda estiver ativo && "e" raqueteX > 0 "comeco do canvas"
    }else if(setaEsquerda && raqueteX > 0){
        raqueteX = raqueteX - velocidadeRaquete;
    }

    bolaX = bolaX + bolaDX;                //Faz a bola andar para direita e para esquerda
    bolaY = bolaY + bolaDY;                 //Faz a bola andar para cima e para baixo

    requestAnimationFrame(desenhar)                      //Atualizar à tela de forma suave
}
desenhar();                                           //Chama função desenhar

