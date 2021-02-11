var database;
var gameState = 0;
var contestantCount;
var database;
var quiz;
var question;
var contestant;
var allcontestants;

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink");

  
}
