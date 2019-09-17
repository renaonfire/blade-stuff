// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}






//--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
  // initiate an animation to a certain page element:
  $('html, body').stop().animate(
    { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
    speed, // speed in milliseconds
    'swing' // easing
  ); // end animate
} // end scrollThere function definition

//--- START SCROLL EVENTS ---//
// detect a mousewheel event (note: relies on jquery mousewheel plugin):
$(window).on('mousewheel', function (e) {

  // get Y-axis value of each div:
  var div1y = $('#first').offset().top,
      div2y = $('#second').offset().top,
      div3y = $('#third').offset().top,
      div4y = $('#fourth').offset().top,
      
      // get window's current scroll position:
      lastScrollTop = $(this).scrollTop(),
      // for getting user's scroll direction:
      scrollDirection,
      // for determining the previous and next divs to scroll to, based on lastScrollTop:
      targetUp,
      targetDown,
      // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
      targetElement;

  // get scroll direction:
  if ( e.deltaY > 0 ) {
    scrollDirection = 'up';
  } else if ( e.deltaY <= 0 ) {
    scrollDirection = 'down';
  } // end if

  // prevent default behavior (page scroll):
  e.preventDefault();

  // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
  if (lastScrollTop === div1y) {
    targetUp = $('#first');
    targetDown = $('#second');
  } else if (lastScrollTop === div2y) {
    targetUp = $('#first');
    targetDown = $('#third');
  } else if (lastScrollTop === div3y) {
    targetUp = $('#second');
    targetDown = $('#fourth');
  } else if (lastScrollTop < div2y) {
    targetUp = $('#first');
    targetDown = $('#second');
  } else if (lastScrollTop < div3y) {
    targetUp = $('#second');
    targetDown = $('#third');
  } else if (lastScrollTop < div4y) {
    targetUp = $('#third');
    targetDown = $('#fourth');
  } else if (lastScrollTop > div4y) {
    targetUp = $('#fourth');
    targetDown = $('#fourth');
  } // end else if

  // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
  if (scrollDirection === 'down') {
    targetElement = targetDown;
  } else if (scrollDirection === 'up') {
    targetElement = targetUp;
  } // end else if

  // scroll smoothly to the target element:
  scrollThere(targetElement, 400);

}); // end on mousewheel event
//--- END SCROLL EVENTS ---//


//hamburger

$(document).ready(function(){
  $(".hamburger").click(function(){
      $("#icon-nav").toggleClass("active");
  });
});