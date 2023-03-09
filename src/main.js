//import { example } from "./data.js";
//import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";

//const btnEmpezar = document.getElementById("empezar");
const btnEmpezar = document.getElementById("empezar");
btnEmpezar.addEventListener("click", muestraSeccionContainer);

const section0 = document.getElementById("section0");
const container = document.getElementById("container");
function muestraSeccionContainer() {
  section0.style.display = "none";
  container.style.display = "block"; 
}
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

const tagDivGeneral = document.createElement("div");
tagDivGeneral.className = "ContieneTodosLosPokemones";

for (let i = 0; i < data.pokemon.length; i++) {
  document.getElementById("container").appendChild(tagDivGeneral);

  const tagDivHijoGeneral = document.createElement("div");
  tagDivHijoGeneral.className = "Cards";
  tagDivGeneral.appendChild(tagDivHijoGeneral);

  const tagPhp = document.createElement("p");
  tagPhp.className = "hp";
  tagPhp.textContent = data.pokemon[i].stats.base_stat;

  tagDivHijoGeneral.appendChild(tagPhp);

  const tagSpan = document.createElement("span");
  tagSpan.textContent = "HP";
  tagPhp.appendChild(tagSpan);

  const imgPokemon = document.createElement("img");
  tagDivHijoGeneral.appendChild(imgPokemon);
  imgPokemon.src = data.pokemon[i].img;
  imgPokemon.alt = "Imágenes de Pokemones";
  imgPokemon.className = "imgCard";

  const tagPname = document.createElement("p");
  tagPname.textContent = data.pokemon[i].name;
  tagPname.className = "poke-name";
  tagDivHijoGeneral.appendChild(tagPname);

  const tagPnum = document.createElement("p");
  tagPnum.textContent = data.pokemon[i].num;
  tagPnum.className = "poke-number";
  tagDivHijoGeneral.appendChild(tagPnum);

  const tagPtype = document.createElement("p");
  tagPtype.className = "types";
  tagPtype.textContent = data.pokemon[i].type;
  tagDivHijoGeneral.appendChild(tagPtype);
}
