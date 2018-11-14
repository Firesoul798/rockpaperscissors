// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice="";
var computerChoice="";
var winner="";


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    var userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    var randomNumber=Math.random(); 
    console.log(randomNumber)
    if (randomNumber < .333333333){
        computerChoice= "Rock";
    }else if (randomNumber < .6666666){
        computerChoice="Paper";
    }else if (randomNumber < .99999999){
        computerChoice="Scissors";
    }
    $("#computerChoice").text(computerChoice);
});
