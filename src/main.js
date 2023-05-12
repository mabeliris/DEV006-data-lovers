//import main from './data.js';
// import data from './data/lol/lol.js';

import {countries, deportistas, showSports } from './data.js';
import data from './data/athletes/athletes.js';

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

//mostrar paises en pantalla
function pintarPaises(paises){
    const countriesList = document.getElementById("countriesList");
    //const texto="<p>hola</p>"
    //countriesList.innerHTML=texto;
    //const p = document.createElement("p");
    //p.innerHTML="hola";
    //countriesList.append(p);
    country.forEach(item=>{
        const li=document.createElement("li");
        li.textContent=item;
        countriesList.appendChild(li)
    })


}
pintarPaises(country);


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

//mostrar paises en pantalla
function pintarDeportes(deporte){
    const sportList = document.getElementById("sportList");
    sports.forEach(list=>{
        const sportLista=document.createElement("li");
        sportLista.textContent=list;
        sportList.appendChild(sportLista)
    })
}
pintarDeportes(sports);

const Olympic = deportistas(data.athletes)
console.log(Olympic);

