//import pokemon from "./data/pokemon/pokemon";

// estas funciones son de ejemplo
//export const sortByName = (ordenar) => {
export const sortData = (ordenar) => {
  const copia = [...ordenar]
  return copia.sort((datapokemonA, datapokemonB) =>{
    if (datapokemonA.name > datapokemonB.name){
      return 1;
    } else if (datapokemonA.name < datapokemonB.name) {
      return -1;
    } else {
      return 0;
    } 
  });
};

// export const filterByType = (ordenar, typeUser) =>
//   return ordenar.filter((data.pokemon) => data.pokemon.type.includes(typeUser));
// };

//export function sortData(data, order) {
//  const orderArray = data.pokemon.slice().sort((a, b) => {
//const nameA = a.name;
//const nameB = b.name;
//if (nameA < nameB) {
//return -1;
    //}
    //else {
      //return 1;
   // }
  //})
  //if (order === 'AZ') {
    //return {pokemon:orderArray}
  // else {
    //const inverso = orderArray.reverse();
    //return {pokemon:inverso}
  //}
 //}

//export const example = () => {
//return "example";
//};

//export const anotherExample = () => {
  //return "OMG";
//};
// El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.

// Te reomendamos que este archivo contenga toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

// filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.

// sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

// computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.

// Estos nombres de funciones y de parámetros son solamente referenciales, lo que decidas depende de tu propia implementación.

// Estas funciones deben ser puras e independientes del DOM. Estas funciones serán después usadas desde el archivo src/main.js, al cargar la página, y cada vez que el usuario interactúe (click, filtrado, ordenado, ...).
