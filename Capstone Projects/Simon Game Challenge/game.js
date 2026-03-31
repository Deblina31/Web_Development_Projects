var buttonColours=["red", "blue", "green", "yellow" ];
var gamePattern=[];
var level=0, started=false;

$("body").keypress(function(){
  if(!started){
    nextSequence();
    started=1;
  }
});

function nextSequence(){
    userClickedPattern=[];
    level++;
    var randomNumber= Math.floor((Math.random()*4));
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour); 

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeIn(100);
    playSound(randomChosenColour);
    $("#level-title").text(`Level ${level}`);
}


$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver(){
  level=0;
  gamePattern=[];
  userClickedPattern=[];
  started=false;
}


function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    // If user completed full sequence correctly
    if (userClickedPattern.length === gamePattern.length) {

      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  } 
  else {

    $("#level-title").text(`Game Over, Press Any Key to Restart`);
  playSound("wrong");

  $("body").addClass("game-over");

  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);

  startOver();
}
}

function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}


