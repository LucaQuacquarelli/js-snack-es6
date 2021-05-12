// Snack 1
// Creare un array di oggetti:// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// utilizzando destructuring e template literal.
var bicyclesList = [

    {
        name: "Gravel Bike",
        weight: 10 
    },
    {
        name: "Mountain Bike",
        weight: 14
    },
    {
        name: "Bmx",
        weight: 9
    },
    {
        name: "Fat Bike",
        weight: 11
    },
    {
        name: "Downhill",
        weight: 18
    },
]

// Stampare a schermo la bici con weight minore.
var smallBike = bicyclesList[0];

for (var i = 0; i < bicyclesList.length; i++) {
    
    if (bicyclesList[i].weight < smallBike.weight) {
        smallBike = bicyclesList[i];
    }

}
var {name} = smallBike;
var {weight} = smallBike;
console.log(`La bici più leggera è la ${name} ed ha un peso di ${weight} kg`);
document.getElementById("text").innerHTML = `La bici più leggera è la <strong>${name}</strong> ed ha un peso di <strong>${weight}</strong> kg`;
