//import main from './data.js';
// import data from './data/lol/lol.js';

import {countries, showSports } from './data.js';
import data from './data/athletes/athletes.js';

// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data.athletes);


//mostrar data (paises)
const btnExplorar=document.getElementById("bntExplorar");
const countriesPage = document.getElementById("countries_page");

//función boton explora
btnExplorar.addEventListener("click",paginaCountries)
function paginaCountries(){
    countriesPage.classList.toggle("showCoountries");   
};
//mostrar paises
const country= countries(data.athletes)
//console.log(country);
//country.forEach(lista=> console.log(lista));
//imprimir lista de paises
const countriesList = document.getElementById("countriesList");
const countriesPrint= country.forEach(listaDeportes=>console.log(listaDeportes));
const newArrayCountries = countriesPrint;
countriesList.innerHTML = "esta es la lista de paises " + newArrayCountries;







//filtrados
const sports = showSports(data.athletes)
console.log(sports);

//enlace deportes
const sportLink = document.getElementById("sports");
const sportPage = document.getElementById("deportes");
sportLink.addEventListener("click",paginaDeportes)

//funcion link deportes
function paginaDeportes(){
    sportPage.classList.toggle("showSports");
};

//ordenar como lista
//const listaDeportes= sports.forEach(lista=> console.log(lista));
//console.log(lista);


//activar enlace pagina deportes




