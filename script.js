//Конвертація Валюти//
const currencyVault= 1.08;

function convertToEuros(dollars){
    return dollars*currencyVault;
}

const userInput=prompt("Put in sum in dollars");
const dollars=parseFloat(userInput);
const euro=convertToEuros(dollars);
console.log (euro );



//Необхідна Швидкість//

const distanceInKilometrs= parseFloat(prompt("Put in distance between cities"));
const travelTime= parseFloat(prompt("Put in time of travel"));

function calculateSpeed(distance,time){
    return distance/time;
}

const speed=calculateSpeed(distanceInKilometrs,travelTime);
console.log(speed+"km/hour")