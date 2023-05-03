// estas funciones son de ejemplo










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

export const countries= (arrayCountries)=>{
  const paises=arrayCountries.filter(arrayCountry=> arrayCountry.team==="USA");
  return (paises)
};

  


// tercera historia,ordenar 

export const ordenar=()=> {

}
 

  



export const anotherExample = () => {
  return 'OMG';
};
