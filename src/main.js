//import main from './data.js';
// import data from './data/lol/lol.js';

import {countries, showSports } from './data.js';
import data from './data/athletes/athletes.js';

// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data.athletes);


//mostrar data (deportes)
const btnExplorar=document.getElementById("bntExplorar");
const sportsPage = document.getElementById("countries_page");
//función boton explora
btnExplorar.addEventListener("click",paginaCountries)
function paginaCountries(){
    sportsPage.classList.toggle("showCoountries");
};
const sports=showSports(data.athletes)
console.log(sports);

//filtrar
document.getElementById("bntExplorar").addEventListener("click",countries)
const country= countries(data.athletes)
console.log(country);







//document.getElementById("explora").addEventListener("click",showSports);




