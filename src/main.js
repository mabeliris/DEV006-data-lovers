//import main from './data.js';
// import data from './data/lol/lol.js';

import { countries, showSports } from './data.js';
import data from './data/athletes/athletes.js';

// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data.athletes);


//mostrar data (deportes)
//data.athletes.map(sport => console.log(sport.sport));

const sports=showSports(data.athletes)
console.log(sports);

const country= countries(data.athletes)
console.log(country);







//document.getElementById("explora").addEventListener("click",showSports);




