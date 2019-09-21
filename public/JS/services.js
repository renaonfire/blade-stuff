//image movement
var $body = document.querySelector('body')

var AutoScroll = function(scrollList) {
  this._scrollList = scrollList;
  this._startTop = $body.scrollTop
  this._isInAnimate = false
  var that = this
  $(window).on('mousewheel',function(e) {
    
    that.scroll(e)
    return false
  })
}
AutoScroll.prototype.getEndTop = function(currentTop,e) {
  var scrollTopList = []
  Array.prototype.forEach.call(this._scrollList, function(d) {
    scrollTopList.push(d.offsetTop)
  })
  scrollTopList.push(currentTop)
  scrollTopList.sort(function(a, b) {
    return a > b
  })
  if (e.originalEvent.wheelDelta<0)
    return scrollTopList[scrollTopList.indexOf(currentTop) + 1]
  
  else
    return scrollTopList[scrollTopList.indexOf(currentTop) - 1]
}
AutoScroll.prototype.scroll = function(e) {
  var startTop
  var endTop
  var currentTop
  var that = this
  if (!this._isInAnimate) {
    startTop = this._startTop
    currentTop = $body.scrollTop
    endTop = this.getEndTop(currentTop,e)
    this._isInAnimate = true
    var durTime = 1000
    if (startTop === endTop) {
      that._isInAnimate = false
      return
    }
    $('body').animate({
      scrollTop: endTop
    }, durTime, function() {
      that._startTop = $body.scrollTop
      that._isInAnimate = false
    })
  }
}

var as = new AutoScroll(document.querySelectorAll('.content-box'));


//content animation
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

function isElementInViewport(el) {
  
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


//hamburger

$(document).ready(function(){
  $(".hamburger").click(function(){
      $("#icon-nav").toggleClass("active");
  });
});