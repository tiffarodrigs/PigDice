function Game() {
  this.player1 = new Player("P1");
  this.player2 = new Player("P2");
  console.log(this.name);
  
}

function Player(name) {
  this.name = name
  this.tempScore = 0;
  this.diceNumber = 0;
  this.totalScore = 0;
}

Player.prototype.roll = function() {
  this.diceNumber = Math.floor(Math.random() * 6) + 1;
  console.log("object", this.name);
  console.log("roll " + this.diceNumber);
  this.tempScore += this.diceNumber;
  if (this.diceNumber === 1) {
    this.tempScore = 0;
    return false;

  }

  console.log("tempScore" + this.tempScore);
  return true;
};

Player.prototype.calculateTotalScore = function() {

  this.totalScore += parseInt(this.tempScore);
  this.tempScore = 0;
  console.log("calculateTotal" + this.totalScore)
  if(totalScore >= 100){
    //this.player is winner & reset all the scores for both players
    alert(this.name + " wins!")
    game.resetGame();
  }

}
Game.prototype.resetGame=function(){
  this.player1.diceRoll = 0;
  this.player2.diceRoll=0;
  this.player1.tempScore=0;
  this.player1.totalScore=0;
  this.player1.tempScore=0;
  this.player2.totalScore=0;

}



function p1ScoreUpdate(player1) {
  $("#diceRoll1").text(player1.diceNumber);
  $("#tempScore1").text(player1.tempScore);
  $("#totalScore1").text(player1.totalScore);
}

function p2ScoreUpdate(player2) {
  $("#diceRoll2").text(player2.diceNumber);
  $("#tempScore2").text(player2.tempScore);
  $("#totalScore2").text(player2.totalScore);
}



let game = new Game();


$(document).ready(function() {

  p1ScoreUpdate(player1);
  p2ScoreUpdate(player2);

  $("#roll1").click(function() {
    event.preventDefault();
    console.log("inside submit");
    if (!player1.roll()) {
      $("#hold1").prop("disabled", true);
      $("#hold2").prop("disabled", false);
      $("#roll1").prop("disabled", true);
      $("#roll2").prop("disabled", false);
    }
    p1ScoreUpdate(player1);
  });

  $("#hold1").click(function(event) {
    event.preventDefault();
    player1.calculateTotalScore();
    $("#hold1").prop("disabled", true);
    $("#hold2").prop("disabled", false);
    $("#roll1").prop("disabled", true);
    $("#roll2").prop("disabled", false);
    p1ScoreUpdate(player1);
  });




  $("#roll2").click(function() {
    event.preventDefault();
    console.log("inside submit");
    if (!player2.roll()) {
      $("#hold1").prop("disabled", false);
      $("#hold2").prop("disabled", true);
      $("#roll1").prop("disabled", false);
      $("#roll2").prop("disabled", true);
    }
    p2ScoreUpdate(player2);
  });

  $("#hold2").click(function(event) {
    event.preventDefault();
    player2.calculateTotalScore();
    $("#hold2").prop("disabled", true);
    $("#hold1").prop("disabled", false);
    $("#roll2").prop("disabled", true);
    $("#roll1").prop("disabled", false);

    p2ScoreUpdate(player2);
  });

});
