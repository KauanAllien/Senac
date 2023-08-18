//SEM ORIENTAÇÃO OBJETOS
var nome1 = "Paula";
var nome2 = "Juliana";
var nome3 = "Alana";

var idade1 = 25;
var idade2 = 35;
var idade3 = 45;

function falar(nome, idade){
    alert('Sem Orientação Objeto: Hello I am' +nome+ 'e tenho' +idade+ 'anos');

}

falar(nome1,idade1);
falar(nome2,idade2);
falar(nome3,idade3);

//COM ORIENTAÇÃO OBJETOS 
//Classe 
class Pessoa{                                  //Classe Pessoa
    constructor(nome, idade){                   //Construtor , Finalidade: Construir o Objeto , Onde você passa os parâmetros(Dados) 
        this.nome = nome;                      //Atributo nome
        this.idade = idade;                     //Atributo Idade  
    }
    falar(){                                   //Método Falar
        alert("Hello my name is "+this.nome+" e tenho "+this.idade + "anos");
    }
}

//Instanciando Objeto - Criar Objeto
var pessoa1 = new Pessoa('Hércules', 27);         //Objeto Pessoa1
var pessoa2 = new Pessoa('Abigail', 25);          //Objeto Pessoa2


pessoa1.falar();
pessoa2.falar();
alert('Hello'+pessoa1.nome);

//HERANÇA E POLIMORFISMO 

//Criando classe PAI
class Animal{
    constructor(nome){
        this.nome = nome;
    }
    fazerBarulho(){
        alert(" Fazendo Barulho Genérico");
    }
}

//Criando classe filhas de Animal

class Cachorro extends Animal{
    constructor(nome , raça){
        super(nome);
        this.raça = raça;
    }
    fazerBarulho(){
        alert("Cachorro Latindo !");
    }

}

class Gato extends Animal{
    constructor(nome , cor){
        super(nome);
        this.cor = cor;
    }
    fazerBarulho(){
        alert("Gato Miando !");
    }
}

var ObjetoCachorro = new Cachorro('Fred','Schnauzer');
alert(ObjetoCachorro.nome);
alert(ObjetoCachorro.raça);
ObjetoCachorro.fazerBarulho();      //latindo

var ObjetoGato = new Gato('Sininho', 'Cinza');
ObjetoGato.nome = "Tom";               //Alterando atributos públicos
ObjetoGato.cor = "Azul";               //Alterando atributos públicos
alert(ObjetoGato.nome);
alert(ObjetoGato.cor);
ObjetoGato.fazerBarulho();    //Miando

//Encapsulamento modificador de acesso 
class contaBancária{
    constructor(saldo){
        this._saldo = saldo;      // "_" Definição = Private (Privado)

    }
    get obterSaldo(){
        return this._saldo;

    } 
    depositar(valor){
        this._saldo = this._saldo + valor;
    }
    sacar(valor){
        if(valor <= this._saldo){
            this._saldo = this._saldo - valor;
        }else{
            alert("Passou valor maior que o saldo!!!");
        }
    }
}

var minhaConta = new contaBancária(20000);
alert(minhaConta.obterSaldo);
minhaConta.depositar(100);
alert(minhaConta.obterSaldo);
minhaConta.sacar(10000);
alert(minhaConta.obterSaldo);