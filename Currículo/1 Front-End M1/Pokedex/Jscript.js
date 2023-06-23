function buscar() {
    var entrada = document.getElementById("entrada").value.toLowerCase();
    

    if(entrada.length < 1){
        entrada = contador;
    }
    var url = "https://pokeapi.co/api/v2/pokemon/"+entrada;

    fetch(url)
    .then(response => response.json())
    .then(data => { 

        var tela = document.getElementById("tela");
        tela.innerHTML = '<h2>'+ data.name +'</h2>'
        +' <img class="pokémon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+data.id+'.gif" > '
        +' <img class="pokémon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/'+data.id+'.gif" > '
        //'<img class="pokémon" src="'+ data.sprites.front_default +'">'
        //'<img class="pokémon" src="'+ data.sprites.back_default +'">'
        +'<p> Id:'+ data.id +' </p>'
        +'<p> Tipo:'+ data.types.map(type => type.type.name).join(", ") + '</p>'
        +'<p> Habilidades:'+ data.abilities.map(ability => ability.ability.name)

        contador = data.id;
        document.getElementById("entrada").value="";

    }).catch(error => {
        var tela = document.getElementById("tela");
        tela.innerHTML = "<p> Pokémon não Encontrado! </p>";
    })

}

    var  contador=0;

    function Próximo(){
        contador = contador +1;
        buscar();
    }

    function Anterior() {
        contador = contador -1;
        buscar();
    }
    




