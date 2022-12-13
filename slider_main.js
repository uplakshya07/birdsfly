// Video slider
const slideContainer = document.querySelector(".slide-container");
const slide = document.querySelector(".slides");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 5000;

let slides = document.querySelectorAll(".slide");
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);
console.log(slideWidth);

setInterval(() => {
  moveToNextSlide();
}, interval);

const getSlides = () => document.querySelectorAll(".slide");

slide.addEventListener("transitionend", () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = ".7s ease-out";
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = ".7s ease-out";
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviousSlide);

const slideActive = (event) => {
  let el = event.target;
  el.classList.add("active");
};
const slideDeactive = (event) => {
  event.target.classList.remove("active");
};

document.querySelectorAll(".slide").forEach((item) => {
  item.addEventListener("mouseover", slideActive);
  item.addEventListener("mouseout", slideDeactive);
});

document.querySelectorAll(".slide-content").forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.parentElement.classList.add("active");
  });
  item.addEventListener("mouseout", () => {
    item.parentElement.classList.remove("active");
  });
});
document.querySelectorAll(".slide-title").forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.parentElement.classList.add("active");
  });
  item.addEventListener("mouseout", () => {
    item.parentElement.classList.remove("active");
  });
});
