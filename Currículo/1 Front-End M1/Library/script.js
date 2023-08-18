class Livro {
    constructor(title, Autor){
        this.title = title;
        this.Autor = Autor;
    }

}

// Classe Gerenciamento de livros , Responsável por gerenciar os elementos da tela
class Gerenciamento{
    constructor(){
        this.livros = [];   //Lista de livros
        this.formulario = document.getElementById('formulario');
        this.listagem = document.getElementById('listagem');

        //Monitorar o submit(click no botão) do formulário - chama a função adicionar
        this.formulario.addEventListener('submit', this.Adicionar.bind(this));
    }

    Adicionar(event){
        event.preventDefault();
        var title = document.getElementById('title').value;  //Pega o valor title(titulo)
        var Autor = document.getElementById('Autor').value;  //Pega o valor Autor

        var livro = new Livro(title, Autor);  //Criando Objeto Livro
        this.livros.push(livro); //Adiciona Objeto Livro na Lista Livros
        this.exibirTela();
        title.value = '';  //Finalidade Limpar o Campo
        Autor.value = '';  //Finalidade Limpar o campo Autor
    }
    
    exibirTela(){
        this.listagem.innerHTML = ''; //limpando lista
        for(var i = 0; i < this.livros.length; i++){     //Percorrer toda Lista de Livros
            var livro = this.livros[i];
            var li = document.createElement('li');
            li.textContent = livro.title + ' por ' + livro.Autor;
            this.listagem.appendChild(li);

        }
    }
}

var Gerenciar = new Gerenciamento();                     //Instanciando um novo objeto gerenciamento 