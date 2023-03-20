//import { example } from "./data.js";
//import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import {sortData} from "./data.js";
import pokemon from './data/pokemon/pokemon.js';
import {filterByType} from "./data.js";

const pokemones = data.pokemon;
//Para porbar que corre la funcion
// console.log(sortData(pokemones));

const headerHtml = document.getElementById("headerHtml");
// headerHtml.addEventListener("onload", ocultarHeader());

headerHtml.style.display = "none";

function ocultarHeader() {
  headerHtml.style.display = "none";
}

const section0 = document.getElementById("section0");
const container = document.getElementById("contieneTodosLosPokemones");
container.style.display = "none";


const btnEmpezar = document.getElementById("empezar");
btnEmpezar.addEventListener("click", ()=>{
  section0.style.display = "none";
  container.style.display = "grid";
  headerHtml.style.display = "block";

});
// btnEmpezar.addEventListener("click", mostrarSeccionContainer());
section0.style.display = "block";
function mostrarSeccionContainer() {
  section0.style.display = "none";
  mostrarHeader();
  container.style.display = "block";
}

function mostrarHeader() {
  headerHtml.style.display = "block";
}
//Todos: hace referencia a las opciones del select
//Chequear: para agregar lo del EVENT
//const sortTodos = document.getElementById("todos");
//sortTodos.addEventListener ("click", pintar(pokemones));

// function muestraTodoslosCards(array) {
//   //console.log("ver que llega en cada caso: ", array);
//   const tagDivGeneral = document.createElement("div");
//   tagDivGeneral.className = "ContieneTodosLosPokemones";
//   document.getElementById("container").appendChild(tagDivGeneral);
//   for (let i = 0; i < array.length; i++) {

//     const tagDivHijoGeneral = document.createElement("div");
//     tagDivHijoGeneral.className = "Cards";
//     tagDivGeneral.appendChild(tagDivHijoGeneral);

//     const tagPhp = document.createElement("p");
//     tagPhp.className = "hp";
//     tagPhp.textContent = array[i].stats.base_stat;

//     tagDivHijoGeneral.appendChild(tagPhp);

//     const tagSpan = document.createElement("span");
//     tagSpan.textContent = "HP";
//     tagPhp.appendChild(tagSpan);

//     const imgPokemon = document.createElement("img");
//     tagDivHijoGeneral.appendChild(imgPokemon);
//     imgPokemon.src = array[i].img;
//     imgPokemon.alt = "Imágenes de Pokemones";
//     imgPokemon.className = "imgCard";

//     const tagPname = document.createElement("p");
//     tagPname.textContent = array[i].name;
//     tagPname.className = "poke-name";
//     tagDivHijoGeneral.appendChild(tagPname);

//     const tagPnum = document.createElement("p");
//     tagPnum.textContent = array[i].num;
//     tagPnum.className = "poke-number";
//     tagDivHijoGeneral.appendChild(tagPnum);

//     const tagPtype = document.createElement("p");
//     tagPtype.className = "types";
//     tagPtype.textContent = array[i].type;
//     tagDivHijoGeneral.appendChild(tagPtype);
//   }
// } 

function pintar(data){
  let todos = '';
  //data.forEach((elemento) => {
  for (let i = 0; i < data.length; i++){
    todos += `
<div class="Cards">
<p class="hp"><span>HP </span>${data[i].stats["max-hp"]}</p>
<img src=${data[i].img} alt="Imágenes de Pokemones" class="imgCard">
<p class="poke-name">${data[i].name.toUpperCase()}</p>
<p class="poke-number">Nº ${data[i].num}</p>
<p class="types">${data[i].type}</p>
</div>
   `
  }
  document.getElementById('contieneTodosLosPokemones').innerHTML = todos;
}
pintar(pokemones);
//console.log(pokemones);
//console.log(pintar(pokemones))

// const sortAZ = document.getElementById("A-Z");
// sortAZ.addEventListener ("click",()=>{
//   console.log('se dio click');
//   document.getElementById("container").innerHTML=""
//   muestraTodoslosCards(sortByName(pokemones))
// })

document.getElementById("ordenar").addEventListener("change", (event) => {
  //console.log("veamos el evento", event.target.value);
  const option = event.target.value;
  if (option === "TODOS") {
    pintar(pokemones);
    //muestraTodoslosCards(pokemones);
  } else if (option === "A-Z") {
    const resultadoAZ = sortData(pokemones);
    pintar(resultadoAZ);
  } else {
    const resultadoZA = sortData(pokemones); 
    pintar(resultadoZA.reverse());
  }
});

document.getElementById("tipo").addEventListener("change", (event) => {
      const optionType = event.target.value;
      if(optionType === "ACERO"){
         const typeAcero = filterByType(pokemones);
         pintar(typeAcero);
      }else if(optionType === "AGUA"){
        const typeAgua = filterByType(pokemones);
        pintar(typeAgua);
     }else if(optionType === "BICHO"){
      const typeBicho = filterByType(pokemones);
      pintar(typeBicho);
   }else if(optionType === "DRAGON"){
    const typeDragon = filterByType(pokemones);
    pintar(typeDragon);
 }else if(optionType === "ELÉCTRICO"){
  const typeEléctrico = filterByType(pokemones);
  pintar(typeEléctrico);
}else if(optionType === "FANTASMA"){
  const typeFantasma = filterByType(pokemones);
  pintar(typeFantasma);
}else if(optionType === "FUEGO"){
const typeFuego = filterByType(pokemones);
pintar(typeFuego);
}else if(optionType === "HADA"){
  const typeHada = filterByType(pokemones);
  pintar(typeHada);
}else if(optionType === "HIELO"){
const typeHielo = filterByType(pokemones);
pintar(typeHielo);
}else if(optionType === "LUCHA"){
  const typeLucha = filterByType(pokemones);
  pintar(typeLucha);
}else if(optionType === "NORMAL"){
const typeNormal = filterByType(pokemones);
pintar(typeNormal);
}else if(optionType === "PLANTA"){
  const typePlanta = filterByType(pokemones);
  pintar(typePlanta);
}else if(optionType === "PSÍQUICO"){
const typePsíquico = filterByType(pokemones);
pintar(typePsíquico);
}else if(optionType === "ROCA"){
  const typeRoca = filterByType(pokemones);
  pintar(typeRoca);
}else if(optionType === "SINIESTRO"){
const typeSiniestro = filterByType(pokemones);
pintar(typeSiniestro);
}else if(optionType === "TIERRA"){
  const typeTierra = filterByType(pokemones);
  pintar(typeTierra);
}else if(optionType === "VENENO"){
const typeVeneno = filterByType(pokemones);
pintar(typeVeneno);
}else{
  const typeVolador = filterByType(pokemones);
  pintar(typeVolador);
  }
}
);



// console.log(tipoPokemon);


// function muestralosCardsOrdenadosdelaAZ() {
// }

// const sortZA = document.getElementById("Z-A");
// sortAZ.addEventListener ("click", muestralosCardsOrdenadodelaZA());
// function muestralosCardsOrdenadosdelaZA() {
// }

// src/main.js para todo tu código que tenga que ver con mostrar los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM. Operaciones como creación de nodos, registro de manejadores de eventos (event listeners o event handlers),

// Y ahora tendríamos la variable data disponible en el script src/main.js.

// const fragmentName = document.createDocumentFragment();
// for (let i = 0; i < data.pokemon.length; i++) {
//   //recorriendo los elementos del array
//   const tagLi = document.createElement("li"); //
//   tagLi.textContent = data.pokemon[i].name;
//   // console.log(data.pokemon[i].name);   //propiedad o key
//   fragmentName.appendChild(tagLi);
//   // console.log(tagLi);
// }

// document.getElementById("pokemonesDisplay").appendChild(fragmentName);
//Function que estructure los cards

// for (let i = 0; i < data.pokemon.length; i++) {
//   document.getElementById("container").appendChild(tagDivGeneral);

//   const tagDivHijoGeneral = document.createElement("div");
//   tagDivHijoGeneral.className = "Cards";
//   tagDivGeneral.appendChild(tagDivHijoGeneral);

//   const tagPhp = document.createElement("p");
//   tagPhp.className = "hp";
//   tagPhp.textContent = data.pokemon[i].stats.base_stat;

//   tagDivHijoGeneral.appendChild(tagPhp);

//   const tagSpan = document.createElement("span");
//   tagSpan.textContent = "HP";
//   tagPhp.appendChild(tagSpan);

//   const imgPokemon = document.createElement("img");
//   tagDivHijoGeneral.appendChild(imgPokemon);
//   imgPokemon.src = data.pokemon[i].img;
//   imgPokemon.alt = "Imágenes de Pokemones";
//   imgPokemon.className = "imgCard";

//   const tagPname = document.createElement("p");
//   tagPname.textContent = data.pokemon[i].name;
//   tagPname.className = "poke-name";
//   tagDivHijoGeneral.appendChild(tagPname);

//   const tagPnum = document.createElement("p");
//   tagPnum.textContent = data.pokemon[i].num;
//   tagPnum.className = "poke-number";
//   tagDivHijoGeneral.appendChild(tagPnum);

//   const tagPtype = document.createElement("p");
//   tagPtype.className = "types";
//   tagPtype.textContent = data.pokemon[i].type;
//   tagDivHijoGeneral.appendChild(tagPtype);
// }
// //console.log (data.pokemon);
