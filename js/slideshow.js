var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function animate() {
  setTimeout(function () {
    var next = slideIndex + 1;
    var slides = document.getElementsByClassName("mySlides");
    if (next > slides.length) {
      next = 1;
    }
    if (next < 1) {
      next = slides.length;
    }
    slideIndex = next;
    showSlides(slideIndex);
    animate();
  }, 4000); // Change image every 4 seconds
}
window.onload = function () {
  showSlides(slideIndex);
  animate();
};
