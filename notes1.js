Function pickMystery() {

    const suspectName= selectRandom(suspectsArray);
    const weaponType =selectRandom(weaponsArray);
    const roomPlace =selectRandom(roomsArray);
  return {
    suspect:suspectName,
    weapon:weaponType,
    room:roomPlace
   } 

}


function revealMystery() {
   const object=pickMystery();

   return (`${suspectName.firstName} ${suspectName.lastName}`)    
}