// estas funciones son de ejemplo
//import athletes from "./data/athletes/athletes";
//primera historia de usuario, mostrar la data

export const showSports=(array)=> { 
  const deportes=array.map(athlete =>(athlete.sport));
  return(deportes)

};

//segunda historia, filtrar

/*export const countries= (athletes)=>{
  const newFilter = athletes.filter((team) => {
    const result = athletes.team === "USA";
    return result;
  });
  return newFilter;
};*/
export const countries= (array)=>{
  const newFilter=array.filter(athlete=>(athlete.team));
  return (newFilter)
};
 


 

  


// tercera historia,ordenar 

export const ordenar=()=> {

}
 

  



export const anotherExample = () => {
  return 'OMG';
};
