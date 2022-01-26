function Player(name) {
  this.name = name
  this.diceNumber=0;
  this.totalScore=0;
  this.tempScore=0;
  console.log(this.name);
}



Player.prototype.roll=function(){
 this.diceNumber= Math.floor(Math.random() * 6) + 1;
 console.log("roll "+this.diceNumber);
 this.tempScore = this.diceNumber;
 this.total(this.tempScore);
};





Player.prototype.total=function(tempScore){
  if(this.totalScore==="100"){
    //  //we need to call the second player object
}
if(this.tempScore==="1"){
  this.totalScore=0;
  this.tempScore = 0;

}
 
    console.log("temp "+ this.tempScore);
   this.totalScore += this.tempScore;
   console.log("total "+ this.totalScore);
   return this.totalScore
 
}
Player.prototype.hold= function(){
  //we need to call the second player object
}

let player1= new Player("P1");
player1.roll();
player1.roll();
//player1.total();

