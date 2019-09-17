var button = document.querySelector("#play-button button");
var video = document.querySelector("#video");

var hamburger = $(".hamburger");



var buttonClicked = false;



button.addEventListener("click", function() {

    if(buttonClicked) {
        button.style.color = "#FEFF02";
        video.style.visibility = "hidden";
        buttonClicked = false;
    } else {
        button.style.color = "rgb(185, 185, 185)";
        video.style.visibility = "visible";
        buttonClicked = true;
    }
    
});

$(document).ready(function(){
    $(".hamburger").click(function(){
        $("#icon-nav").toggleClass("active");
    });
});


