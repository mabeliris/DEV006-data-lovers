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
    paises.forEach(item=>{
        // 1. crear elemento li
        const li = document.createElement("li");
        // 2. crear elemento button
        const btn=document.createElement("button");
        // 3. asignar el textCont ent al button        
        btn.textContent = item;
        // 4. agregar el button al li con un appendChild
        li.appendChild(btn);
        // 5. agregar el li al countriesList con un appendChild
        countriesList.appendChild(li)

        // 6. agregar un click eventListener al btm - para probar cada vez que le demos click a un boton se debe hacer un console.log del nombre del pais
        btn.addEventListener("click",()=>{
            console.log(item)
        })

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

function buttonCountries(botones){
    const btn = document.getElementById("countriesList");
    country.forEach(button=>{
        const boton = document.createComment("button");
        boton.innerHTML=button;
        btn.append(boton);
    })
    
}
buttonCountries(country);

const Olympic = deportistas(data.athletes)
console.log(Olympic);

