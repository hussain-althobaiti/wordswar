
$(document).ready(function(){

function GameOver(){
   var HighScore = localStorage.getItem("HighScore");
   var lastScore= localStorage.getItem("lastScore");
    $('#score').html('<h1>your score is '+lastScore+'</h1>');
    $('#HighScore').html('<h1>your Highest Score is '+HighScore+'</h1>');

}

GameOver();


});
