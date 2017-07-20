var prompt = require('prompt-sync')();
var mashArray = ["JungleJapes", "Mushroom Kingdom", "The Great Maze", "Congo Jungle"]
var firstQuestion = [7 , 2]
var secondQuestion = ["Mario", "Link"]

function askQuestion() {
  
  var strike = prompt("How many times will you strike?");
  var fight = prompt("Who will you fight?");
  firstQuestion.push(strike)
  secondQuestion.push(fight)
}
askQuestion()
    
var strike = prompt
var fight = prompt