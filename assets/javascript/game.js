    var counter = 0;
    var wins = 0;
    var losses = 0;
    var computerScore = "";
    var userScore = "";
    var crystalImages = ["assets/images/blue.png", "assets/images/green.png", "assets/images/red.png", "assets/images/yellow.png"]

    var computerScore = Math.floor(Math.random() * (120-19) + 19) 
    $("#goalScore").html("Goal Score:" + computerScore);


$(".btn-dark").on("click", function () {
    counter=0
    
    $("#counter").html("Your Score:" + counter);
    
    var computerScore = Math.floor(Math.random() * (120-19) + 19) 
    
    $("#goalScore").html("Goal Score:" + computerScore);
})
    
crystalImages.forEach(function (imageUrl, index) {
        
    var crystal = $("<img>");
    
    crystal.attr("src", imageUrl)

    var randomVal = Math.floor(Math.random() * 12) + 1;

    crystal.attr("data-points", randomVal);

    crystal.attr("id", "crystal-" + (index + 1 ));

    crystal.addClass("crystal");

    $("#images").append(crystal);
});

$("#images").on("click", ".crystal", function () {
        
    var crystalVal = $(this).attr("data-points");
        
    var crystalValInt = parseInt(crystalVal);
        
    counter = counter + crystalValInt;
        
    $("#counter").html("Your Score:" + counter);

    if (counter === computerScore) {
        
        wins++;
        
        $("#wins").html("Wins:" + wins);
    
    } else if (counter > computerScore) {
        
        losses++;
        
        $("#losses").html("losses:" + losses);
    }
})

