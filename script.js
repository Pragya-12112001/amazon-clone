var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function startSlideShow() {
  setInterval(function() {
    slideIndex++;
    showSlide(slideIndex);
  }, 5000); // Change the duration (in milliseconds) as per your preference
}
showSlide(slideIndex);
startSlideShow();





const sliderContainer = document.querySelector(".frame-slider-container");
const prevButton = document.querySelector(".frame-prev-button");
const nextButton = document.querySelector(".frame-next-button");

prevButton.addEventListener("click", function() {
  sliderContainer.scrollBy({
    left: -800,
    behavior: "smooth"
  });
});

nextButton.addEventListener("click", function() {
  sliderContainer.scrollBy({
    left: 800,
    behavior: "smooth"
  });
});

const sliderContainer1 = document.querySelector(".frame-slider-container1");
const prevButton1 = document.querySelector(".frame-prev-button1");
const nextButton1 = document.querySelector(".frame-next-button1");

prevButton1.addEventListener("click", function() {
  sliderContainer1.scrollBy({
    left: -800,
    behavior: "smooth"
  });
});

nextButton1.addEventListener("click", function() {
  sliderContainer1.scrollBy({
    left: 800,
    behavior: "smooth"
  });
});

const sliderContainer2 = document.querySelector(".frame2-slider-container");
const prevButton2 = document.querySelector(".frame2-prev-button");
const nextButton2 = document.querySelector(".frame2-next-button");

prevButton2.addEventListener("click", function() {
  sliderContainer2.scrollBy({
    left: -800,
    behavior: "smooth"
  });
});

nextButton2.addEventListener("click", function() {
  sliderContainer2.scrollBy({
    left: 800,
    behavior: "smooth"
  });
});
