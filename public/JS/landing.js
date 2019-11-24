var button = document.querySelector("#play-button-button");
var video = document.querySelector("#video");


var buttonClicked = false;



button.addEventListener("click", function() {

    if(buttonClicked) {
        button.style.color = "#FEFF02";
        video.style.display = "none";
        buttonClicked = false;
    } else {
        button.style.color = "rgb(185, 185, 185)";
        video.style.display = "block";
        buttonClicked = true;
    }
    
});