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
console.log(country);

//filtrados
const sports = showSports(data.athletes)
console.log(sports);







//document.getElementById("explora").addEventListener("click",showSports);




