// $("#startButton").click(href='./index.html')
// wordlist https://www.bestwordlist.com/allwords.txt
var wordlist =[ "go","once","said","where","all","blue","family","she","hold","right","a","three","you","animal","call","brown","father","read","hurt","room"];
var data="";
var score =0;
var highScore;
var trys=3;
var word;
$(document).ready(function(){
    $('#score').html("<h2>score : "+score+"</h2>");
    $('#trys').html("<h2>trys : "+trys+"</h2>");


    function nextword(){
        var Random =Math.floor(Math.random() * wordlist.length);
        // console.log(Random);
        word=wordlist[Random];
        $('#words').html("<h1>"+wordlist[Random]+"</h1>");
        data = $("#mainInputBox").val();
    };

    nextword();

    $("#mainInputBox").keypress(function(e){
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13') {

            data = $("#mainInputBox").val();

            if(data==word){
                score +=1;
                $('#score').html("<h2>score : "+score+"</h2>");
                nextword();
                $("#mainInputBox").val("");
                $('#mainInputBox').css("color","#00FF41");

            }else{
                trys -=1;
                checktrys(trys);
                $('#trys').html("<h2>trys : "+trys+"</h2>");
                $('#mainInputBox').css("color","red");
            };
        }
    });

    function checktrys(tryCount){
        if(tryCount === 0){
            alert("Game Over"+" your score is "+score+" the high Score is "+highScore);
            score=0;
            trys=3;
            $('#score').html("<h2>score : "+score+"</h2>");
            location.reload(true);
            //setInterval() Method
        }
    }

    //timer
//     var count=30; // global var
// $(document).ready(function(){
//     var $input = $("#test"); // catch id 
        
//     function countTime(){
        
//         count--;
//         $input.text(count);
//     }

//     setInterval(countTime,1000)

//     // console.log(0 == "0");
//     // console.log(0 === "0");
// })

 });
