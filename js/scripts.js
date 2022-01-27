function Game()
{
  this.players = {};
  this.totalScore=0;
  console.log(this.name);
}

function Player(name) {
  this.name = name
  this.tempScore=0;
  this.diceNumber=0;
  
}

Player.prototype.roll=function(){
 this.diceNumber= Math.floor(Math.random() * 6) + 1;
 console.log("object" +this.player);
 console.log("roll "+this.diceNumber);
 this.tempScore = this.diceNumber;
 //this.tempScore += this.diceNumber;
 console.log("tempScore" + this.tempScore)
 //this.total(this.tempScore);
};


function calculateTotalScore(playerObj){
  //add the score of each dice roll of the player1
  //if player rolls 1 no points are added that round
  console.log(playerObj);
  console.log(playerObj.tempScore);
 game.totalScore += parseInt(playerObj.tempScore);
 console.log("calculateTotal"+game.totalScore)

}

Player.prototype.hold= function(){
  //we need to call the second player object
}
let game= new Game();
$(document).ready(function() {
  $("form#player").submit(function() {
    event.preventDefault();
    console.log("inside submit");
    let player= new Player("P1");
    player.roll();
   calculateTotalScore(player);
    

  });
});


//player1.total();

