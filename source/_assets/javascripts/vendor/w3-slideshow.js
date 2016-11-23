var slideIndex = 0;
var slideCount = 0
// showDivs(slideIndex);

function plusDivs(n) {
  var orig = slideIndex;
  slideIndex += n
  if ( slideIndex >= slideCount) {
    slideIndex = 0
  }
  if ( slideIndex < 0) {
    slideIndex = slideCount - 1;
  }

  transitionSlide(orig, slideIndex);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  console.log
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

$(function () {
  var slides = $(".mySlides");
  slideCount = slides.length;
  slides.hide()
  slides.first().show()
})

function transitionSlide(orig,next) {
  console.log("Changing Slide",orig,next)
  var slides = $(".mySlides")
  $(slides[orig]).slideToggle('slow')
  $(slides[next]).slideToggle('slow')
}

