function buscar() {
    var cep = document.getElementById('cep').value;     //input do cep, do HTML
    var url = 'https://viacep.com.br/ws/'+cep+'/json/'; //limk de busca do api

    fetch(url)                                    //Vai buscar a url
    .then(response => response.json())           //assincrono, vai esperar um arquivo json
    .then(data => {                             //Vai esperar para verificar sem tem algum dado
        // alert('funcionou');

        if(data.erro){
            document.getElementById('resultado').textContent = 'CEP não Encontrado!';
        }else{
            document.getElementById('resultado').innerHTML = '<strong> Cidade: </strong>'+ data.localidade + '<br>'
            +'<strong> Cep: </strong>' + data.cep + '<br>'
            +'<strong> Logradouro: </strong>' + data.logradouro + '<br>'
            +'<strong> Bairro: </strong>' + data.bairro + '<br>'
            +'<strong> Complemento: </strong>' + data.complemento + '<br>'
            +'<strong> Estado: </strong>' + data.uf + '<br>'
            +'<strong> Código IBGE: </strong>' + data.ibge + '<br>';
        
        }

    }).catch(error => alert('deu errado'+ error));
}