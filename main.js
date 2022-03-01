const prompt = require('prompt-sync')({sigint: true});

let time = 6

console.log("~You've gone fishing!~");
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
console.log("Try to maximize the value of your caught fish.");
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
console.log("You can fish for six hours (till 12:00pm).");
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
console.log("10lbs of fish is the max amount you can catch!");
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");
console.log("Good Luck!");
console.log("*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*");

// one hour for each fish, so the time can increment by one with the fish in the loop.

while (time < 12) {

    console.log("The time is  "+ time +" +:00am. So far you've caught:")
    console.log("0 fish, 0 lbs, $0.00")
    console.log("You caught a 'Slimy Scaly Bass' weighing 0.24 lbs and valued at $3.12");
    console.log("Your action: [c]atch or [r]elease?")
    let selection = prompt("> ");
    
}