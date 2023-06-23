$(window).scroll(function(){ 

    var posição = $(this).scrollTop();
    $(".Avião").css({
        'right': posição / 4 + '%'
    }); 



} );
//Quando estiver digitando, já vai fazendo a Procura.
document.getElementById("Procurado").addEventListener("keyup", function(){ 


    var entrada = this.value.toLowerCase();                  //valor da entrada
    var cartoes = document.getElementsByClassName("card");    //lista de cards

    for (var i=0; i < cartoes.length; i++){
        var nome = cartoes [i].getAttribute("data-name").toLowerCase();       //nome que esta no data-name dos cards
        
        if(nome.indexOf(entrada) > -1){                                     //se for encontrada a letra da busca
            cartoes[i].style.display = "";                                  //aparece a div card 
        } else{
            cartoes[i].style.display = "none";                            //se não foi encontrado, desaparece div
        }



    }


    
});