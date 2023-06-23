
function buscar(){
    var seletor = document.getElementById('moeda').value; 
    var resultado = document.getElementById('resultado');


    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl')   //buscar url
    .then(response => response.json())                                                    //espera receber arquivo json
    .then(data => {                                                                      //espera dado do arquivo json 

        var preco = data[seletor].brl;
        resultado.textContent = formatar(preco);
        mudarImagem(seletor);

    }).catch(error => resultado.textContent = error);                                                    //imprime o erro 
}

function formatar(valor){
    //mascara para formatar o valor
    valor = Number(valor).toFixed(2).replace('.',',');
    valor = "R$" +valor;
    
    return valor;
}

function mudarImagem(seletor) {
    var moeda = document.getElementById('Imagem');

    if(seletor == "bitcoin"){
        moeda.innerHTML = '<img width="200" src="https://www.infomoney.com.br/wp-content/uploads/2019/06/bitcoin-37.jpg?resize=900%2C515&quality=50&strip=all">'
    }else if(seletor == "ethereum"){
        moeda.innerHTML = '<img width="200" src="https://cf.shopee.com.br/file/041c3dfc7fd37985a08dd468c9bd9d95">'
    }else if(seletor == "litecoin"){
        moeda.innerHTML = '<img width="200" src="https://i.pinimg.com/originals/78/cd/18/78cd18f4b01f7ca0f72dbaa263ed6d4f.png">'
    }else if(seletor == "dogecoin"){
        moeda.innerHTML = '<img width="200" src="https://thumbs.dreamstime.com/z/moeda-de-cobre-do-dogecoin-isolada-na-rendi%C3%A7%C3%A3o-branca-do-fundo-d-95554632.jpg">'
    } 


    

   
}