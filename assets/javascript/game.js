$(document).ready( function (){

var counter = 0;
var wins = 0; //# of succesful matches
var losses = 0; //# of times counter > computerscore
var computerScore = "";
var roundFinished = false
var crystalImages = ["assets/images/blue.png", "assets/images/green.png", "assets/images/red.png", "assets/images/yellow.png"] //array containing crystal images



// Reset round function
function roundStarted() {
    roundFinished = false;
    counter = 0
    computerScore = Math.floor(Math.random() * (120-19) + 19) 
    $("#goalScore").html("Goal Score:" + computerScore);
    $("#counter").html("Your Score:" + counter)
    console.log(computerScore);
}
   
//Generate random number for the goalscore on window open

var computerScore = Math.floor(Math.random() * (120-19) + 19) 
$("#goalScore").html("Goal Score:" + computerScore);
console.log(computerScore);

    

//Attach images to the page and assign a random value between 1-12 to each image.    
crystalImages.forEach(function (imageUrl, index) {
        
    var crystal = $("<img>");
    
    crystal.attr("src", imageUrl);

    var randomVal = Math.floor(Math.random() * 12) + 1;

    crystal.attr("data-points", randomVal);

    crystal.attr("id", "crystal-" + (index + 1 ));

    crystal.addClass("crystal");

    $("#images").append(crystal);
});

//Click function on each image /Add each crystals value to the score counter
$("#images").on("click", ".crystal", function () {
        
    var crystalVal = $(this).attr("data-points");
        
    var crystalValInt = parseInt(crystalVal);
        
    counter = counter + crystalValInt;
    $("#counter").html("Your Score:" + counter);

//win and loss conditions and calling reset round function
if (counter === computerScore) {
        wins++;
        $("#wins").html("Wins:" + wins);
        roundFinished = true;
        roundStarted();
        
    } else if (counter > computerScore) {
        losses++;
        $("#losses").html("losses:" + losses);
        roundFinished = true;
        roundStarted();
        
    }
});

})


