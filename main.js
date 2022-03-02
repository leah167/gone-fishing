const prompt = require('prompt-sync')({sigint:true});

// Variables

let time = 5
let count = 0
let totalPokemon = 0

// Empty Arrays

let caughtPoke = [];
let caughtPokeWeight = [];
let caughtPokeValue = [];

// Descriptive Arrays

const adj1 = ["mean", "cute", "spicy", "angry", "odd", "rabid", "mighty", "bubbly", "curious", "sleepy"];
const adj2 = ["alpha", "baby", "mega", "average", "old", "gargantuan", "tiny", "rare", "shiny", "common"];
const waterPoke = ["Magikarp", "Tentacool", "Krabby", "Dratini", "Squirtle", "Horsea", "Staryu", "Feebas", "Slowpoke", "Shellder"];

// Functions

function randomPokeGenerator() {

    let randomAdj1 = adj1[Math.floor(Math.random() * adj1.length)];
    let randomAdj2 = adj2[Math.floor(Math.random() * adj2.length)];
    let randomWaterPoke = waterPoke[Math.floor(Math.random() * waterPoke.length)];

    return `${randomAdj1} ${randomAdj2} ${randomWaterPoke}`;
    
}

function randomWeightGenerator(min, max) {

    let weight = (Math.random() * (10.00 - 1.00) + 1.00).toFixed(2);
    
    return ([weight]);
    
}

function randomValueGenerator(min, max) {

    let value = (Math.random() * (100.00 - 1.00 + 1.00) + 1.00).toFixed(2);

    return ([value]);
    
}

function totalWeightGenerator() {
    let sum = 0

    for (let count = 0; count < caughtPokeWeight.length; count++) {
        
        sum = sum + Number(caughtPokeWeight[count]);
        
    }
   return sum.toFixed(2);

    
}

function totalValueGenerator() {
    let sum = 0

    for (let count = 0; count < caughtPokeValue.length; count++) {

        sum = sum + Number(caughtPokeValue[count]);
        
    }
    return sum.toFixed(2);
    
}

// Start up dialogue

console.log ("Welcome to the Safari Zone!")
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
console.log ("Congrats! You recieved a 'Great Rod'!")
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
console.log("~Lets go fishing for water Pokemon!~");
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
console.log("Try to maximize the value of your caught pokemon.");
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
console.log("You can fish for six hours (till 11:00am).");
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
console.log("10lbs is the max weight you can catch!");
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
console.log("Good Luck!");
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");

// one hour for each fish, so the time can increment by one with the fish in the loop.

while (time < 11) {
    time ++;
    count ++;

   

    let randomPoke = randomPokeGenerator();
    let randomWeight = randomWeightGenerator();
    let randomValue = randomValueGenerator();
    let totaledWeight = totalWeightGenerator();
    let totaledValue = totalValueGenerator();

    const pokeObj = {
        pokemon: randomPoke,
        weight: randomWeight,
        value: randomValue
    }

    console.log("The time is  "+ time +":00am. So far you've caught:")
    console.log(+ totalPokemon + " pokemon, " + totaledWeight + " lbs, $ " + totaledValue +"");
    console.log(`You caught a ${randomPoke} weighing ${randomWeight} lbs with a value of $${randomValue}!`);
    console.log("Your action: [c]atch or [r]un away?")
    let selection = prompt("> ");



    if (selection === 'c') {
    
        caughtPoke.push(pokeObj);
        caughtPokeWeight.push(pokeObj.weight);
        caughtPokeValue.push(pokeObj.value);
        console.log(caughtPoke);
        console.log(caughtPokeWeight);
        console.log(caughtPokeValue);
        totalPokemon++;

    } 
    
}







