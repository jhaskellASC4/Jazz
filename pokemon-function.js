var pokemonRoster = [
{"name" :"Goldluck", "TYPE": "Water", "HP": 80, "DEF": 95, "ATK": 80 ,"LEGEND": false },
{"name" :"Butterfree", "TYPE": "Bug", "HP": 60, "DEF": 80, "ATK": 90 , "LEGEND": false },
{"name" :"Venusaur", "TYPE": "Grass", "HP": 80, "DEF": 100, "ATK": 100 , "LEGEND": false },
{"name" :"Pidgey", "TYPE": "Flying", "HP": 40, "DEF": 35, "ATK": 35 , "LEGEND": false },
{"name" :"Beedrill", "TYPE": "Bug", "HP": 65, "DEF": 80, "ATK": 45 , "LEGEND": false },
{"name" :"Kakuna", "TYPE": "Bug", "HP": 25, "DEF": 25, "ATK": 25 , "LEGEND": false }
]
// Prints Roster//
function myfunction(arr) {
    for (var i = 0; i < arr.length ; i++) {
        console.log(arr[i]);
}
}

myfunction(pokemonRoster);

//Attacked Pokemon/
function pokemonAttacted() {
    for (var i=0 ; i < pokemonRoster ; i++) {
        pokemonRoster[i].hp = pokemonRoster[i].hp - 10

    
   }
}
// pokemonAttacked();
//printRoster();
