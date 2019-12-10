
function GameOver(){
   var HighScore = localStorage.getItem("HighScore");
   var lastScore= localStorage.getItem("lastScore");
    $('#score').html('<h1>Your score is '+lastScore+'</h1>');
    $('#HighScore').html('<h1>Your Highest Score is '+HighScore+'</h1>');

}

GameOver();



