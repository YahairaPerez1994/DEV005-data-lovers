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

function filtrar (data,tipo){
  const copia1 = [...data]
  const type = copia1.filter((elemento)=>{
    if (elemento.type.includes(tipo))
    {
      return true;
    } else {
      return false
    }
  })
  return type
}

function filtrar1 (data, searchPokemones){
  const copia2 = [...data]
  const name = copia2.filter((elemento)=>{
    if (elemento.name.includes(searchPokemones))
    {
      return true;
    } else {
      return false
    }
  })
  return name
}


export {
  filtrar, filtrar1}

// El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.

// Te recomendamos que este archivo contenga toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

// filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.

// sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

// computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.

// Estos nombres de funciones y de parámetros son solamente referenciales, lo que decidas depende de tu propia implementación.

// Estas funciones deben ser puras e independientes del DOM. Estas funciones serán después usadas desde el archivo src/main.js, al cargar la página, y cada vez que el usuario interactúe (click, filtrado, ordenado, ...).
