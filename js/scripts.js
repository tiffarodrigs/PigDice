function Game() {
  this.player1 = new Player("P1");
  this.player2 = new Player("P2");
}

function Player(name) {
  this.name = name
  this.tempScore = 0;
  this.diceNumber = 0;
  this.totalScore = 0;
}

Player.prototype.roll = function() {
  this.diceNumber = Math.floor(Math.random() * 6) + 1;
  this.tempScore += this.diceNumber;
  if (this.diceNumber === 1) {
    this.tempScore = 0;
    return false;
  }
  return true;
};

Player.prototype.calculateTotalScore = function() {

  this.totalScore += parseInt(this.tempScore);
  this.tempScore = 0;
}


Game.prototype.resetGame = function() {
  this.player1.diceNumber = 0;
  this.player2.diceNumber = 0;
  this.player1.tempScore = 0;
  this.player1.totalScore = 0;
  this.player1.tempScore = 0;
  this.player2.totalScore = 0;

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

function disablePlayer1(){
  $("#hold1").prop("disabled", true);
  $("#hold2").prop("disabled", false);
  $("#roll1").prop("disabled", true);
  $("#roll2").prop("disabled", false);
}


function disablePlayer2(){
  $("#hold1").prop("disabled", false);
  $("#hold2").prop("disabled", true);
  $("#roll1").prop("disabled", false);
  $("#roll2").prop("disabled", true);
}

let game = new Game();


$(document).ready(function() {

  p1ScoreUpdate(game.player1);
  p2ScoreUpdate(game.player2);

  $("#roll1").click(function() {
    event.preventDefault();
    console.log("inside submit");
    if (!game.player1.roll()) {
      disablePlayer1();
    }
    p1ScoreUpdate(game.player1);
  });

  $("#hold1").click(function(event) {
    event.preventDefault();
    game.player1.calculateTotalScore();
    disablePlayer1();
    p1ScoreUpdate(game.player1);

    if (game.player1.totalScore >= 10) {
      //this.player is winner & reset all the scores for both players
      alert(game.player1.name + " wins!")
      game.resetGame();
      p1ScoreUpdate(game.player1);
      p2ScoreUpdate(game.player2);
      disablePlayer2();
    }
  });
  
  $("#roll2").click(function() {
    event.preventDefault();
    console.log("inside submit");
    if (!game.player2.roll()) {
      disablePlayer2();
    }
    p2ScoreUpdate(game.player2);
  });

  $("#hold2").click(function(event) {
    event.preventDefault();
    game.player2.calculateTotalScore();
    disablePlayer2(); 
    p2ScoreUpdate(game.player2);

    if (game.player2.totalScore >= 10) {
      alert(game.player2.name + " wins!")
      game.resetGame();
      p1ScoreUpdate(game.player1);
      p2ScoreUpdate(game.player2);
    }
  });

});
