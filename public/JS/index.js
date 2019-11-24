
var hamburger = $(".navbar-toggler");





$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".hamburger-nav").toggleClass("active");
        $(".bg-light").toggleClass("active");
        $(".ham-button").toggleClass("disabled");
        $(".close-button").toggleClass("active");
    });
});


