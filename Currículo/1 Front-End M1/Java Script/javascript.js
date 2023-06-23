alert('Olá Mundo');

var número = 25;

if(número > 10){
    alert('numero maior que 10');
}else if(numero < 0){
    alert('numero inválido');
}else{
    alert('menor que 10');
}
var contador = 0;


// enquanto contador for menor que 5 executa
while(contador < 5){
    // alert('Numero: '+ contador);
    alert('Numero:'+ contador);
    contador = contador + 1 ;
}

// criação de Lista - Dog 0, Wolf 1, Bear 2
var nomes = ['Dog','Wolf','Bear'];
// alert(nomes[0]);


// nomes.Length = 3
for(contador=0; contador < nomes.length; contador++){
    alert(nomes[contador]);

 if(nomes[contador] ==='Dog'){
    alert('Pessoa Encontrada!');
 }
}
// função

function baixarEstoque(){
    alert("Baixou Estoque!");
}

function movimentarCaixa(){
    alert("Caixa movimentado");
}

function fazerVenda(){
    baixarEstoque();
    movimentarCaixa();
    // DOM
    var titulo = document.getElementById('titulo');
    titulo.innerHTML = "novo texto";

}

// objeto
var pessoa = { idade: 17, nome: 'Cloud', altura:1.77};
alert(pessoa.nome);

