//primera historia de usuario, mostrar la data
export const showSports=(array)=> { 
  const deportes=array.map(athlete =>(athlete.sport));          
  return [...new  Set (deportes)]; 
};

export const orderSport=()=>{
}

//segunda historia, filtrar
export const countries= (array)=>{
  const team=array.map(athlete=>(athlete.team));
  return [...new Set(team)]; 
};

// tercera historia,ordenar 
export const ordenar=()=> {
}
 
//atletas
export const deportistas = (array) => {
  const atleta=array.map(athlete=>(athlete.name));
  return [...new Set(atleta)];
};

//filtrar paises por atletas
export const filtrado=(arr,team) =>{
  return arr.filter(el=>el.team===team);
}



