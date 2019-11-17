// $("#startButton").click(href='./index.html')
// wordlist https://www.bestwordlist.com/allwords.txt
var wordlist =[ "go","once","said","where","all","blue","family","she","hold","right","a","three","you","animal","call","brown","father","read","hurt","room"];
var data="";
var score =0;
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
            }else{
                trys -=1;
                $('#trys').html("<h2>trys : "+trys+"</h2>");
            };
        }
    });

    if(trys==0){
        
    }


 });
