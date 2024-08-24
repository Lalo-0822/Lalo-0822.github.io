const url="https://pokeapi.co/api/v2/pokemon/";
const contenedor=document.getElementById("pokedex-container");

const obtenerPokemon= async (id)=>{
    let resultado=await fetch(url +'/' + id);
    let dato=await resultado.json();
    console.log(dato);
    crearTarjetaPokemon(dato);
};

const crearTarjetaPokemon= (pokemon)=>{
    let div = document.createElement('div');
    let template =`
<div class='flip-card'>
         <div class='flip-card-inner'>
                <div class='flip-card-front'>
                 <img src="${pokemon.sprites.front_default}"alt="${pokemon.name} >
                  <h3 class="name">${pokemon.name}</h3>
                 <small class="type">Tipo:<span>${pokemon.types[0].type.name}</span></small>
                </div> 
            <div class='flip-card-back'>
                <h3>${pokemon.name}</h3>
                <p>ID:${pokemon.id}</p>
                <p>ALTURA${pokemon.height / 10}m</p>
                <p>PESO:${pokemon.weight /10}kg</p>
        </div>
            </div>
</div>`;


    div.innerHTML = template;
    contenedor.appendChild(div);
}



function buscadorPokemon(){
   
    var id_pokemon = document.getElementById("id_pokemon").value;
    console.log(id_pokemon);
  
    if(id_pokemon == ""){
        contenedor.innerHTML = "";
        for(let i=1;i<=1500;i++)
            {
                obtenerPokemon(i);
            }
        }
        else{
            contenedor.innerHTML="";
            obtenerPokemon(id_pokemon);
        }
           
}




    
    




